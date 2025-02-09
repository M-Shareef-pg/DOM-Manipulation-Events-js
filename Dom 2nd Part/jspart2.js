document.addEventListener("DOMContentLoaded", function () {
    // 1. Meta Tag Optimization
    function updateMetaTags() {
        let metaTitle = document.querySelector("title");
        let metaDescription = document.querySelector("meta[name='description']");
        let metaKeywords = document.querySelector("meta[name='keywords']");
        
        if (!metaTitle) {
            metaTitle = document.createElement("title");
            document.head.appendChild(metaTitle);
        }
        if (!metaDescription) {
            metaDescription = document.createElement("meta");
            metaDescription.setAttribute("name", "description");
            document.head.appendChild(metaDescription);
        }
        if (!metaKeywords) {
            metaKeywords = document.createElement("meta");
            metaKeywords.setAttribute("name", "keywords");
            document.head.appendChild(metaKeywords);
        }

        metaTitle.textContent = "Best SEO Optimization Techniques for Websites";
        metaDescription.setAttribute("content", "Learn the best SEO optimization techniques to rank higher on Google.");
        metaKeywords.setAttribute("content", "SEO, Google ranking, website optimization, technical SEO");

        console.log("Meta Tags Updated!");
    }

    // 2. Structured Data (JSON-LD)
    function addStructuredData() {
        let script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        script.textContent = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Website",
            "name": "SEO Optimized Website",
            "url": window.location.href,
            "description": "A site with optimized SEO features.",
            "publisher": {
                "@type": "Organization",
                "name": "SEO Guru"
            }
        });
        document.head.appendChild(script);
        console.log("Structured Data Added!");
    }

    // 3. Lazy Loading Images (for Performance Optimization)
    function lazyLoadImages() {
        const images = document.querySelectorAll("img");
        images.forEach(img => {
            img.setAttribute("loading", "lazy");
        });
        console.log("Lazy Loading Applied to Images!");
    }

    // 4. Dynamic Sitemap Generator
    function generateSitemap() {
        let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url><loc>${window.location.origin}</loc></url>
            <url><loc>${window.location.origin}/about</loc></url>
            <url><loc>${window.location.origin}/contact</loc></url>
        </urlset>`;
        
        let blob = new Blob([sitemap], { type: "application/xml" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "sitemap.xml";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        console.log("Sitemap Generated!");
    }

    // Execute all SEO optimizations
    updateMetaTags();
    addStructuredData();
    lazyLoadImages();
    generateSitemap();
});
