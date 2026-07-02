function normalizeUrl(url) {
    const u = new URL(url);

    u.hash = "";

    if (u.pathname.endsWith("/") && u.pathname !== "/") {
        u.pathname = u.pathname.slice(0, -1);
    }

    if (u.pathname.endsWith("/index.html")) {
        u.pathname = u.pathname.replace("/index.html", "/");
    }

    return u.href;
}

export { normalizeUrl };