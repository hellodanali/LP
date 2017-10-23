import React, { Component } from 'react';

class Contents extends Component {
	render() {
		return (
			<div className="content">
				<section className="section has-text-centered dark-section header_bubbles_bkg">
					<h3>Create The Future</h3>
					<p className="has-text-centered margin-b">
						Blockchain technology for the modern developer
					</p>
					<div className="margin-t-2">
						<a className="button-white">Contact Us</a>
					</div>
				</section>

				<section className="section white_bubbles_bkg">
					<h4 className="has-text-centered margin-b">Why blockchain?</h4>
					<div className="columns">
						<div className="column is-6">
							<div className="subtitle">The Next Foundational Technology</div>
							<p>
								Just as the internet did 20 years ago, Blockchain provides a new
								frontier of development for enterprises, consumers and software
								developers. Due to its decentralized architecture, immutable
								ledger and highly secure framework, applications of the
								technology will impact industries ranging from financial and
								retail services to personal identity and cryptocurrencies.
							</p>
							<div className="margin-t-2">
								<a className="button-isSecondary">Learn More</a>
							</div>
						</div>
					</div>

					<div className="columns">
						<div className="column  is-6" />
						<div className="column  is-6">
							<div className="subtitle">Blockchain Is...</div>
							<p>
								<b>Secure</b>
								{` - all transactions on a blockchain are Cryptographically secured and provide integrity`}
							</p>
							<p>
								<b>Decentralized</b>
								{` - No ruling authority means no single point of failture`}
							</p>
							<p>
								<b>Immutable</b>
								{` - once data has been written to a blockchain no one, not even a system administrator, can change it`}
							</p>
							<p>
								<b>Highly Available</b>
								{` - As the system is based on thousands of nodes in a peer-to-peer network, and teh data is replicated and updated on each and every node, downtime is no longer a conern `}
							</p>
						</div>
					</div>
				</section>

				<section className="section dark-section isometric-grid">
					<h4 className="has-text-centered margin-b">
						Existing blockchain tech is cool, but...
					</h4>
					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">Kind of Inaccessible</div>
							<p>
								<b>Storage Write Times</b>
								{` - Consensys mechanisms creates a more secure method to
									validate data but slows down the speed at which data can be
									written`}
							</p>
							<p>
								<b>Cryptography</b>
								{` - Is highly soughtafter but hard for inexperienced developers to learn`}
							</p>
							<p>
								<b>Back-End Code </b>
								{` - Blockchain is built on top of low level software languages such as Go, C and C++, making it inaccessible to front end engineers`}
							</p>

							<p>
								<b>Infrastructure Management</b>
								{` - As the core of blockchain is decentralized, managing and maintaining the network performance can pose a challenge for people lacking DevOps experiences`}
							</p>
						</div>
						<div className="column is-5 is-offset-1 is-hidden-mobile
">
							<img src="../styles/img/blockchain_is_secure.png" />
						</div>
					</div>

					{/* <div className="columns">
						<div className="column is-5 is-offset-1 is-hidden-mobile
">
							<img src="../styles/img/but_its_inaccessible.png" />
						</div>
						<div className="column  is-6">
							<div className="subtitle">
								...but it's also kind of inaccessible
							</div>
							<p>
								Wayfarers humblebrag sustainable brunch taiyaki. Messenger bag
								tumblr adaptogen tumeric. Hashtag crucifix twee adaptogen
								single-origin coffee selfies try-hard. Hexagon biodiesel tumblr
								man braid prism crucifix vaporware irony kombucha PBR&B viral.
							</p>
						</div>
					</div> */}
				</section>

				<section className="section dark-section has-text-centered">
					<h3>Introducing ChainTap</h3>
					<h4 className="margin-b">Blockchain Technology You Can Use</h4>
					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">
								Private Blockchain Compatible with Ethereum
							</div>
							<p>
								<b>
									Our goal is to make it seamless for enterprises and modern
									product developers to build data rich internet and mobile
									products that are interoperable with Blockchain technology.
								</b>
							</p>
							<p>
								We have created a private blockchain that is 100% compatible
								with the Ethereum protocol which tracks upstream changes and
								improvements. Our implementation is based on the Parity Ethereum
								client which is written in Rust and is widely accepted as teh
								most used, expedient and secure implementation of Ethereum.
							</p>
						</div>
						<div className="column is-6 is-hidden-mobile
">
							<img src="../styles/img/programmable_middleware.png" />
						</div>
					</div>

					<div className="columns">
						<div className="column  is-6" />

						<div className="column  is-6">
							<div className="subtitle">Blockchain Agnostic</div>
							<p>
								We have abstracted a middleware layer to allow for the exchange
								of private and public data from enterprise applications to smart
								contracts on the public Ethereum network. We will facilitate
								cross blockchain connections with any chain that supports the
								Ethereum protocol.
							</p>
						</div>
					</div>

					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">Serverless Approach</div>
							<p>
								JS developers and mobile devs want a GraphQL layer or
								"serverless" approach to accessing the data their applications
								depend on. These devs may not want to or know how to speak
								directly to the Ethereum JSON-RPC API and it might not be
								advantageous for them to do so. To empower these developers we
								will offer a caching layer and more importantly a "business
								logic and data aggregation" layer.
							</p>
						</div>
						<div className="column  is-6" />
					</div>

					<div className="columns">
						<div className="column  is-6" />
						<div className="column  is-6">
							<div className="subtitle">Rapid Development</div>
							<p>
								Fixing both of these problems will exponentially increase access
								to and adoption of distributed blockchain technologies for
								enterprise and consumer use cases. We will work to create
								turnkey access to the common problems of authentication,
								identity, information management and security. This will result
								in a blockchain-aware Rapid Application Development platform.
							</p>
						</div>
					</div>
				</section>

				<section className="section light-section">
					<h4 className="has-text-centered margin-b">Our History</h4>
					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">CampusTap</div>
							<p>
								CampusTap has been a leading career networking platform for
								education institutions and corporations since 2013. We currently
								serve over 60 organizations across the country and reach over 1M
								people. Throughout the development of the CampusTap we
								recognized the opportunity to bring student identity to the
								blockchain. During the prototype development we quickly found
								that Blockchain development was inaccessible to our JS dev team
								and anyone looking to build an application on blockchain.
							</p>
							<p>
								CampusTap's architecture has leveraged some of the most scalable
								and current technologies today including, Erlang, Elixir,
								Phoenix, GraphQL and React -- which are the core of the TapChain
								platform.
							</p>
							<div className="margin-t-2">
								<a className="button-isSecondary">Learn More</a>
							</div>
						</div>
						<div className="column  is-6" />
					</div>
				</section>

				<section className="section has-text-centered light-section">
					<h4 className="margin-b">Ready to see our platform for yourself?</h4>
					<div className="margin-t-2">
						<a className="button-isPrimary">Request A Demo</a>
					</div>
				</section>
			</div>
		);
	}
}

export default Contents;
