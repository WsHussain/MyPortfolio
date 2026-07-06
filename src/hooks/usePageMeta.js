import { useEffect } from "react";

// Met à jour <title> et <meta name="description"> par page (SEO).
export function usePageMeta(title, description) {
    useEffect(() => {
        document.title = title;
        if (description) {
            const el = document.querySelector('meta[name="description"]');
            if (el) el.setAttribute("content", description);
        }
    }, [title, description]);
}
