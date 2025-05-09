'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './config';

let analytics = null;

export function initializeAnalytics() {
    if (typeof window !== 'undefined' && !analytics) {
        try {
            const app = initializeApp(firebaseConfig);
            analytics = getAnalytics(app);
            console.log('Firebase Analytics initialized');
        } catch (error) {
            console.error('Error initializing Firebase:', error);
        }
    }
    return analytics;
}
