import React, { Component } from 'react';
import secure_img from '../assets/img/blockchain_is_powerful.png';
import middleware_img from '../assets/img/programmable_middleware.png';
import inaccessible_img from '../assets/img/serverless_approach.png';
import foundation from '../assets/img/foundation@2x.png';
import inaccessible_box from '../assets/img/inaccessible_box.png';
import blockchainagnostic from '../assets/img/blockchain_agnostic.png';
import campustap from '../assets/img/campustap_placeholder@2x.png';
import rapidDev_img from '../assets/img/rapid_development.png';
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
										// value=""
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
								style={{ width: '200' }}
							/>
							<div>
								<h3>The Next Foundational Technology</h3>
							</div>
							<p className="margin-t-2 has-text-centered margin-b">
								Just as the internet did 20 years ago, Blockchain provides a new
								frontier of development for enterprises, consumers and software
								developers. Due to its decentralized architecture, immutable
								ledger and highly secure framework, applications of the
								technology will impact industries ranging from finance and
								retail to personal identity and cryptocurrency.
							</p>
						</div>
						<div className="column is-2" />
					</div>
					<div className="columns">
						<div className="column  is-6">
							<div className="subtitle">Blockchain Is powerful...</div>
							<p>
								<b>Secure</b>
								{` - All transactions on a blockchain are cryptographically stored and provide the highest level of data integrity.`}
							</p>
							<p>
								<b>Decentralized</b>
								{` - Without one corer server controlling data, availability and access Blockchain is the next generation approach to data storage.`}
							</p>
							<p>
								<b>Immutable</b>
								{` - Once data has been written to a blockchain. No one, not even a system administrator, can change it`}
							</p>
							<p>
								<b>Highly Available</b>
								{` - As the system is based on thousands of nodes in a peer-to-peer network, and the data is replicated and updated on each and every node, downtime is no longer a concern.`}
							</p>
						</div>
						<div className="column has-text-centered is-5 is-offset-1 is-hidden-mobile image-align
">
							<div>
								<img src={secure_img} />
							</div>
						</div>
					</div>
				</section>

				<section className="section dark-section left_bubbles_bkg">
					<div className="columns">
						<div className="column is-6 is-hidden-mobile image-align">
							<div>
								<img src={inaccessible_box} />
							</div>
						</div>
						<div className="column  is-6">
							<div className="subtitle">But it is inaccessible to most...</div>
							<p>
								<b>Storage Write Times Are Too Slow</b>
								{` - Consensys mechanisms create a more secure method to
									validate data but slows down the speed at which data can be
									written.`}
							</p>
							<p>
								<b>Cryptography Is Hard To Learn</b>
								{` - Cryptography is highly sought after but hard for inexperienced developer to learn.`}
							</p>
							<p>
								<b>Code Requires Extensive Backend Knowledge</b>
								{` - Blockchain is built on top of low level software languages such as Go, C and C++, making it inaccessible to frontend engineers.`}
							</p>

							<p>
								<b>Managing Network Performance Requires DevOps Experiences</b>
								{` - As the core of blockchain is decentralized, managing and maintaining the network performance can pose a challenge for people lacking DevOps experience.`}
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
								product developers to build data rich web and mobile products
								that are interoperable with Blockchain technology. Our
								middleware will allow for the exchange of private and public
								data from enterprise applications to smart contracts on the
								public contracts on the public Ethereum network.
							</p>
						</div>
						<div className="column is-6 is-hidden-mobile image-align
">
							<div>
								<img src={middleware_img} />
							</div>
						</div>
					</div>

					<div className="columns margin-t-2">
						<div className="column  is-6 is-hidden-mobile image-align">
							<div>
								<img src={blockchainagnostic} />
							</div>
						</div>

						<div className="column  is-6">
							<div className="subtitle">Blockchain agnostic</div>
							<p>
								We have created private blockchain that is 100% compatible with
								the Ethereum Protocol which tracks upstream changes and
								improvements. we have abstracted a middleware layer to allow for
								the exchange of private and public data from enterprise
								applications to smart contracts on the public Ethereum network.
								We will facilitate cross blockchain connections with any chain
								that supports the Ethereum protocol.
							</p>
						</div>
					</div>

					<div className="columns margin-t-2">
						<div className="column  is-6">
							<div className="subtitle">Serverless Approach</div>
							<p>
								JS and mobile developers want a GraphQL layer or "Serverless"
								approach to accessing the data their applications depends on.
								These developers may not want to or know how to speak directly
								to the Ethereum JSON-RPC API and it might not be advantageous
								for them to do so. To empower these developers we will offer a
								caching layer and more importantly a "business logic and data
								aggregation" layer.
							</p>
						</div>
						<div className="column  is-5 is-offset-1 is-hidden-mobile image-align">
							<div>
								<img src={inaccessible_img} />
							</div>
						</div>
					</div>

					<div className="columns margin-t-2">
						<div className="column is-6 is-hidden-mobile image-align
">
							<div>
								<img src={rapidDev_img} />
							</div>
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
								CampusTap has been a leading career networking application for
								education institutions and corporations since 2013. We currently
								serve over 60 organizations across the country and reach over 1M
								people. Throughout the development of CampusTap we recognized
								the opportunity to bring student identity to the blockchain.
								However when prototyping the proof of concept, we found
								Blockchain development inaccessible to our JS dev team. Esprezzo
								provides a solution for these developers and for everyone
								looking to build applications on the blockchain.
							</p>
							<p>
								CampusTap's architecture has leveraged some of the most scalable
								and current technologies today including, Erlang, Elixir,
								Phoenix, GraphQL and React -- which are the core of the TapChain
								platform.
							</p>
						</div>
						<div className="column  is-5 is-offset-1 is-hidden-mobile  image-align">
							<div>
								<img src={campustap} />
							</div>
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
									// value=""
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
