import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(bootstrap, 'The theme must initialize in the HTML before React loads');

function loadPage({ savedTheme = null, prefersDark = false, storageBlocked = false } = {}) {
  const classes = new Set(['existing-class']);
  const root = {
    classList: {
      toggle(name, enabled) {
        if (enabled) classes.add(name);
        else classes.delete(name);
      }
    },
    style: {}
  };
  runInNewContext(bootstrap, {
    document: { documentElement: root },
    window: { matchMedia: () => ({ matches: prefersDark }) },
    localStorage: {
      getItem() {
        if (storageBlocked) throw new Error('Storage access denied');
        return savedTheme;
      }
    }
  });
  return { dark: classes.has('dark'), colorScheme: root.style.colorScheme, classes };
}

test('a saved light theme overrides a dark system preference on first paint', () => {
  const page = loadPage({ savedTheme: 'light', prefersDark: true });
  assert.equal(page.dark, false);
  assert.equal(page.colorScheme, 'light');
});

test('a saved dark theme overrides a light system preference on first paint', () => {
  const page = loadPage({ savedTheme: 'dark', prefersDark: false });
  assert.equal(page.dark, true);
  assert.equal(page.colorScheme, 'dark');
});

test('new visitors follow their system preference', () => {
  assert.equal(loadPage({ prefersDark: true }).dark, true);
  assert.equal(loadPage({ prefersDark: false }).dark, false);
});

test('invalid saved preferences fall back to the system theme', () => {
  assert.equal(loadPage({ savedTheme: 'invalid', prefersDark: true }).dark, true);
  assert.equal(loadPage({ savedTheme: 'invalid', prefersDark: false }).dark, false);
});

test('blocked storage does not prevent initialization', () => {
  const page = loadPage({ storageBlocked: true, prefersDark: true });
  assert.equal(page.dark, true);
  assert.equal(page.colorScheme, 'dark');
});

test('initialization preserves unrelated document classes', () => {
  assert.ok(loadPage({ prefersDark: true }).classes.has('existing-class'));
  assert.ok(loadPage({ prefersDark: false }).classes.has('existing-class'));
});
