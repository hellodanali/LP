import React, { Component } from 'react';
import secure_img from '../assets/img/blockchain_is_secure.png';
import middleware_img from '../assets/img/programmable_middleware.png';
import inaccessible_img from '../assets/img/but_its_inaccessible.png';
import foundation from '../assets/img/foundation@2x.png';
import inaccessible_box from '../assets/img/inaccessible_box@2x.png';
import blockchainagnostic from '../assets/img/blockchain_agnostic@2x.png';
import campustap from '../assets/img/campustap_placeholder@2x.png';
import rapidDev_img from '../assets/img/rapid_dev@2x.png';
class Contents extends Component {
	render() {
		return (
			<div className="content">
				<section className="section has-text-centered dark-section header_bubbles_bkg">
					<h1>Create The Future</h1>
					<p className="has-text-centered margin-b sub-p">
						Blockchain technology for the modern developer
					</p>
					<div className="margin-t-2">
						{/* <input className="email-input-box" placeholder="Enter your email" />
						<button type="submit" className="button-isPrimary">
							Subscribe
						</button> */}
						<div className="margin-t-2" id="mc_embed_signup">
							<form
								action="https://Esprezzo.us17.list-manage.com/subscribe/post?u=748152fb359be4abd50b3695c&amp;id=3a4f8cb97d"
								method="post"
								id="mc-embedded-subscribe-form"
								name="mc-embedded-subscribe-form"
								className="validate"
								target="_blank"
								noValidate
							>
								<div id="mc_embed_signup_scroll" className="subscribe-form">
									<label htmlFor="mce-EMAIL" />
									<input
										type="email"
										value=""
										name="EMAIL"
										className="email email-input-box"
										id="mce-EMAIL"
										placeholder="Enter your email"
										required
									/>

									<div className="clear">
										<input
											type="submit"
											value="Subscribe"
											name="subscribe"
											id="mc-embedded-subscribe"
											className="button button-isPrimary"
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</section>

				<section className="section dark-section isometric-grid">
					<div className="columns has-text-centered">
						<div className="column is-2" />
						<div className="column is-8">
							<img
								src={foundation}
								className="is-hidden-mobile margin-b foundation-img"
							/>
							<div>
								<h3>The Next Foundational Technology</h3>
							</div>
							<p className="margin-t-2 has-text-centered margin-b">
								Just as the internet did 20 years ago, Blockchain provides a new
								frontier of development for enterprises, consumers and software
								developers. Due to its decentralized architecture, immutable
								ledger and highly secure framework, applications of the
								technology will impact industries ranging from financial and
								retail services to personal identity and cryptocurrency.
							</p>
						</div>
						<div className="column is-2" />
					</div>
					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">Blockchain Is powerful...</div>
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
						<div className="column has-text-centered is-5 is-offset-1 is-hidden-mobile
">
							<img src={secure_img} />
						</div>
					</div>
				</section>

				<section className="section dark-section">
					<div className="columns">
						<div className="column is-6 is-hidden-mobile">
							<img src={inaccessible_box} />
						</div>
						<div className="column  is-6">
							<div className="subtitle">But it is inaccessible to most...</div>
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
					</div>
				</section>

				<section className="section dark-section has-text-centered">
					<h1>Introducing Esprezzo</h1>
					<h4 className="margin-b">Blockchain Technology You Can Use</h4>

					<div className="columns margin-t-2">
						<div className="column  is-6">
							<div className="subtitle">Programmable middleware</div>
							<p>
								Our goal is to make it seamless for enterprises and modern
								product developers to build data rich internet and mobile
								products that are interoperable with Blockchain technology. We
								have created a private blockchain that is 100% compatible with
								the Ethereum protocol which tracks upstream changes and
								improvements. Our implementation is based on the Parity Ethereum
								client which is written in Rust and is widely accepted as teh
								most used, expedient and secure implementation of Ethereum.
							</p>
						</div>
						<div className="column is-6 is-hidden-mobile
">
							<img src={middleware_img} />
						</div>
					</div>

					<div className="columns margin-t-2">
						<div className="column  is-6">
							<img src={blockchainagnostic} className="is-hidden-mobile" />
						</div>

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

					<div className="columns margin-t-2">
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
						<div className="column  is-5 is-offset-1">
							<img src={inaccessible_img} className="is-hidden-mobile" />
						</div>
					</div>

					<div className="columns margin-t-2">
						<div className="column is-6 is-hidden-mobile
">
							<img src={rapidDev_img} />
						</div>
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
					<h2 className="has-text-centered margin-b">Our History</h2>
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
						</div>
						<div className="column  is-5 is-offset-1 is-hidden-mobile">
							<img src={campustap} className="team-img" />
						</div>
					</div>
				</section>

				<section className="section has-text-centered dark-section header_bubbles_bkg">
					<h3>Stay informed on our latest news.</h3>
					<div className="margin-t-2" id="mc_embed_signup">
						<form
							action="https://Esprezzo.us17.list-manage.com/subscribe/post?u=748152fb359be4abd50b3695c&amp;id=3a4f8cb97d"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_blank"
							noValidate
						>
							<div id="mc_embed_signup_scroll" className="subscribe-form">
								<label htmlFor="mce-EMAIL" />
								<input
									type="email"
									value=""
									name="EMAIL"
									className="email email-input-box"
									id="mce-EMAIL"
									placeholder="Enter your email"
									required
								/>

								<div className="clear">
									<input
										type="submit"
										value="Subscribe"
										name="subscribe"
										id="mc-embedded-subscribe"
										className="button button-white"
									/>
								</div>
							</div>
						</form>
					</div>
				</section>
			</div>
		);
	}
}

export default Contents;
