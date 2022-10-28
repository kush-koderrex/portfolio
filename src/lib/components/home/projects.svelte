<script>
	import Card from '../base/card.svelte';
	import Section from '../layout/section.svelte';
	import ProjectsGrid from '$lib/components/layout/projects-grid.svelte';
	import ThreeByThreeGrid from '$lib/components/layout/3x3-grid.svelte';
	import OneByOneGrid from '$lib/components/layout/1x1-grid.svelte';
	import ExternalLinkIcon from '$lib/svg/external-link.svelte';
	import Github from '$lib/svg/socials/github.svelte';
	import Youtube from '$lib/svg/socials/youtube.svelte';
	import Blobs from '../layout/blobs.svelte';
	import Image from '../base/image.svelte';
	import Tag from '../base/tag.svelte';
</script>

<section id="projects">
	<Section
		align="top"
		title="Projects"
		description="I like to build some small projects when learning. Technologies are varied and so are their purposes. Most of them are open source!"
	>
		<OneByOneGrid>
			<ProjectsGrid>
				<Card>
					<div slot="image">
						<Image path="projects" filename="personal-website" alt="Personal Website" />
					</div>
					<div slot="content">
						<div class="title">
							Portfolio Website
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/kush-koderrex"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
							</div>
						</div>
						<div class="text">
							The website you are seeing right now. Designed to be pretty, simple, and lightweight.

							<!-- <a
								class="project-post-button button secondary-light transparent"
								href="/blog-development-sveltekit"
							>
								Read blog post
							</a> -->
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Svelte</Tag>
							<!-- <Tag>Svelte Kit</Tag> -->
							<Tag color="secondary">Svelte Kit</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="doctor" alt="Pocket Companion" />
					</div>
					<div slot="content">
						<div class="title">
							Doctor Appointment Mobile App
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/kush-koderrex/Doctor-Appointment-App-Flutter-"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://www.youtube.com/watch?v=2iHCMT5eXaM"
									target="_blank"
									rel="noopener"
									title="Open on Youtube"
								>
									<Youtube />
								</a>
							</div>
						</div>
						<div class="text">
							Develop an application for a local doctor they for the patient contact less booking
							system they want a mobile application for the booking the appointment for the doctor
							and at the admin/staff can confirm the booking and the end the booking by manually
							taking the fess and close the booking after the work done.

							<!-- <a
								class="project-post-button button secondary-light transparent"
								href="/ionic-animal-crossing-companion"
							>
								Read blog post
							</a> -->
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag color="secondary">Flutter</Tag>
							<Tag>Dart</Tag>
							<Tag>Firebase</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="ml" alt="Machine Learning" />
					</div>
					<div slot="content">
						<div class="title">
							Machine Learning Model
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/kush-koderrex/Twitter-Sentiment-Analysis-Kush"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>
								<a
									class="text-secondary"
									href="https://github.com/kush-koderrex/Twitter-Sentiment-Analysis-Kush/blob/master/Sentiment_Analysis-.pdf"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							Project addresses the problem of training models for sentiment analysis of a dataset
							tweets from the users for the US Airline Industry. That classifying tweets according
							to the sentiment expressed in them: positive, negative or neutral by using NLP
							Techniques and several DL algorithms (LSTM, RNN).
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag color="secondary">Python</Tag>
							<Tag>NLP</Tag>
							<Tag>NLTK NER</Tag>
							<Tag>Neutral Networks</Tag>
							<Tag>TFIDF</Tag>
							<Tag>BERT</Tag>
						</div>
					</div>
				</Card>
			</ProjectsGrid>


			<ProjectsGrid>	
			<!-- <ThreeByThreeGrid> -->

				<Card>
					<div slot="image">
						<Image path="projects" filename="robot" alt="Nao-Robot" />
					</div>
					<div slot="content">
						<div class="title">
							Nao Robot (Humanoid robot)
							<div class="links">
								<a
									class="text-secondary"
									href="https://www.youtube.com/watch?v=79J19TYpptc"
									target="_blank"
									rel="noopener"
									title="Open on Youtube"
								>
									<Youtube />
								</a>

								<a
									class="text-secondary"
									href="https://www.youtube.com/watch?v=vFUCg_xqqoc&t=10s"
									target="_blank"
									rel="noopener"
									title="Open on Youtube"
								>
									<Youtube />
								</a>
							</div>
						</div>
						<div class="text">
							In this Project, I do programming for a humanoid robot in python. basically, in this
							project, I wrote the python script of code for facial recognition and speech
							recognition.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag color="secondary">Python</Tag>
							<Tag>Machine Learning</Tag>
							<Tag>Artificial Intelligence</Tag>
							<!-- <Tag>Desktop</Tag> -->
						</div>
					</div>
				</Card>

				<!-- <Card>
					<div slot="image">
						<Image path="projects" filename="reminduck" alt="Reminduck" />
					</div>
					<div slot="content">
						<div class="title">
							Reminduck
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/matfantinel/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://appcenter.elementary.io/com.github.matfantinel.reminduck/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A simple reminder app for elementary OS, and my first experience writing native
							desktop apps.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vala</Tag>
							<Tag>GTK</Tag>
							<Tag>Desktop</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card>

				<Card>
					<div slot="image">
						<Image path="projects" filename="reminduck" alt="Reminduck" />
					</div>
					<div slot="content">
						<div class="title">
							Reminduck
							<div class="links">
								<a
									class="text-secondary"
									href="https://github.com/matfantinel/reminduck"
									target="_blank"
									rel="noopener"
									title="Open project on GitHub"
								>
									<Github />
								</a>

								<a
									class="text-secondary"
									href="https://appcenter.elementary.io/com.github.matfantinel.reminduck/"
									target="_blank"
									rel="noopener"
									title="Open site"
								>
									<ExternalLinkIcon />
								</a>
							</div>
						</div>
						<div class="text">
							A simple reminder app for elementary OS, and my first experience writing native
							desktop apps.
						</div>
					</div>
					<div slot="footer">
						<div class="tags">
							<Tag>Vala</Tag>
							<Tag>GTK</Tag>
							<Tag>Desktop</Tag>
							<Tag color="secondary">Open Source</Tag>
						</div>
					</div>
				</Card> -->
			</ProjectsGrid>
				
			<!-- </ThreeByThreeGrid> -->
		</OneByOneGrid>
	</Section>
	<Blobs maxTop={5} minLeft={50} />
</section>

<style lang="scss">
	.title {
		display: flex;
		align-items: center;
		justify-content: space-between;
		.links {
			display: flex;
			align-items: center;
			justify-content: space-between;
			gap: 15px;
			a {
				width: 30px;
				height: 30px;
				padding: 3px;

				&:hover {
					color: var(--primary-color);
					fill: var(--primary-color);
				}
			}
		}
	}

	.project-post-button {
		width: fit-content;
		margin: 10px auto 0;
		font-weight: 500;
	}
</style>
