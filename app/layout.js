import './globals.css'

export const metadata = {
	title: 'LmaoPass Challenge',
	description: 'Make your passwords Harder',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css?family=Roboto+Mono"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
