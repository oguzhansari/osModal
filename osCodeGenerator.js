function osCodeGenerator(t) { void 0 == t && (t = 10); for (var o = "", n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", s = 0; t > s; s++) o += n.charAt(Math.floor(Math.random() * n.length)); return o }
