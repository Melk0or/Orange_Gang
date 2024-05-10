import { useState } from 'react'
import headerStyles from '../Header.module.scss'
import { Link } from 'react-router-dom'

const Header = () => {
	const [burgerOpen, setBurgerOpen] = useState(false)

	return (
		<header>
			<div className={headerStyles.headerLeft}>
				<div className={headerStyles.headerIcon}>
					<Link to='/'>
						<img src='./images/OG_IDEAL.png' alt='Logo' />
					</Link>
				</div>
				<div
					className={
						!burgerOpen
							? headerStyles.headerBurgerContainer
							: headerStyles.active
					}
					onClick={() => {
						setBurgerOpen(prevState => !prevState)
					}}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className={headerStyles.headerCenter}>
				<h1>ORANGE GANG</h1>
			</div>
			<div className={headerStyles.headerRight}>
				<div className={headerStyles.headerRightLiked}>
					<Link to=''>
						<img src='./images/liked.png' alt='liked' />
					</Link>
				</div>
				<div>
					<Link to=''>
						<img src='./images/account.png' alt='account' />
					</Link>
				</div>
				<div>
					<Link to=''>
						<img src='./images/cart.png' alt='' />
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
