
const footerLinks = [
	{
		heading: "Our Products",
		links: [
			"The Support Suite",
			"The Sales Suite",
			"Support",
			"Guide",
		],
	},
	{
		heading: "Top Features",
		links: [
			"Ticketing System",
			"Knowledge Base",
			"Community Forums",
			"Help Desk Software",
		],
	},
	{
		heading: "Resources",
		links: [
			"Product Support",
			"Request Demo",
			"Library",
			"Peoplepower Blog",
		],
	},
	{
		heading: "Company",
		links: [
			"About Us",
			"Press",
			"Investors",
			"Events",
		],
	},
	{
		heading: "Favourite Things",
		links: [
			"For Enterprise",
			"For Startups",
			"For Benchmark",
			"For Small Business",
		],
	},
];

const socialIcons = [
	{ icon: "fab fa-facebook-f", url: "#" },
	{ icon: "fab fa-twitter", url: "#" },
	{ icon: "fab fa-linkedin-in", url: "#" },
	{ icon: "fab fa-github", url: "#" },
];

const Footer = () => {
	return (
		<footer style={{ background: "#23272f", color: "#fff", padding: "40px 0 0 0" }}>
			<div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
					<div style={{ fontWeight: 700, fontSize: 24, marginBottom: 16 }}>weCan</div>
					<div style={{ display: "flex", gap: 16 }}>
						{socialIcons.map((s, i) => (
							<a key={i} href={s.url} style={{ color: "#fff", fontSize: 20, background: "#2d313a", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", marginLeft: 8, textDecoration: "none" }}>
								<i className={s.icon}></i>
							</a>
						))}
					</div>
				</div>
				<hr style={{ border: 0, borderTop: "1px solid #444", margin: "24px 0" }} />
				<div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 32 }}>
					{footerLinks.map((col, idx) => (
						<div key={idx} style={{ minWidth: 150 }}>
							<div style={{ fontWeight: 600, marginBottom: 12 }}>{col.heading}</div>
							<ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
								{col.links.map((link, i) => (
									<li key={i} style={{ marginBottom: 8, color: "#bbb", fontSize: 15 }}>{link}</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div style={{ height: 32 }}></div>
			</div>
		</footer>
	);
};

export default Footer;
