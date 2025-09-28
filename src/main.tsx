import { render } from 'preact'
import { App } from './app.tsx'

render(<App />, document.getElementById('app')!)

// Register service worker for image caching
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope)
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error)
            })
    })
}
