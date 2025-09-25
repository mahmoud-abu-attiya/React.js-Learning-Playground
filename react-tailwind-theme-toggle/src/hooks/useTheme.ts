import { useCallback, useEffect, useMemo, useState } from 'react'

// TailwindCSS v4 dark mode setup note:
// We use the "class" strategy. Tailwind applies dark variants when the root <html>
// element has the class `dark`. This hook centralizes theme logic and keeps the
// DOM class in sync with user preference while persisting it in localStorage.

export type ThemePreference = 'light' | 'dark' | 'system'

const THEME_STORAGE_KEY = 'theme'

function getInitialTheme(): ThemePreference {
	// Read persistent preference if available; otherwise default to 'system'
	try {
		const stored = localStorage.getItem(THEME_STORAGE_KEY)
		if (stored === 'light' || stored === 'dark' || stored === 'system') {
			return stored
		}
	} catch {
		// Ignore storage errors (e.g., privacy mode)
	}
	return 'system'
}

function applyThemeClass(preference: ThemePreference) {
	// Apply or remove the `dark` class based on preference and system settings
	const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
	const shouldUseDark = preference === 'dark' || (preference === 'system' && isSystemDark)

	const root = document.documentElement // documentElement => html tag
	if (shouldUseDark) {
		root.classList.add('dark')
	} else {
		root.classList.remove('dark')
	}
}

export function useTheme() {
	// Holds the user's selected preference: 'light' | 'dark' | 'system'
	const [preference, setPreference] = useState<ThemePreference>(getInitialTheme)

	// Effective theme resolves 'system' to concrete 'light' | 'dark'
	const effectiveTheme = useMemo(() => {
		if (preference === 'system') {
			const isSystemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
			return isSystemDark ? 'dark' : 'light'
		}
		return preference
	}, [preference])

	// Apply the theme class and persist preference whenever it changes
	useEffect(() => {
		applyThemeClass(preference)
		try {
			localStorage.setItem(THEME_STORAGE_KEY, preference)
		} catch {
			// Ignore storage errors
		}
	}, [preference])

	// Listen for OS theme changes only when in 'system' mode
	useEffect(() => {
		if (preference !== 'system') return
		const mql = window.matchMedia('(prefers-color-scheme: dark)')
		const handler = () => applyThemeClass('system')
		try {
			mql.addEventListener('change', handler)
		} catch {
			// Fallback for older browsers
			mql.addListener?.(handler)
		}
		return () => {
			try {
				mql.removeEventListener('change', handler)
			} catch {
				mql.removeListener?.(handler)
			}
		}
	}, [preference])

	// Helpers to change preference
	const setLight = useCallback(() => setPreference('light'), [])
	const setDark = useCallback(() => setPreference('dark'), [])
	const setSystem = useCallback(() => setPreference('system'), [])

	// Cycle order: light -> dark -> system -> light
	const cycleTheme = useCallback(() => {
		setPreference(prev => (prev === 'light' ? 'dark' : prev === 'dark' ? 'system' : 'light'))
	}, [])

	return {
		preference,
		effectiveTheme, // 'light' | 'dark' reflecting current appearance
		setLight,
		setDark,
		setSystem,
		cycleTheme,
	}
}


