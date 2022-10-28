<ul class="resume-skills">
	<li>
		Front-end
		<div class="tags-container">
			<span class="tag">React</span>
			<span class="tag">Svelte</span>
			<span class="tag">Angular</span>
			<span class="tag">PWAs</span>
		</div>
	</li>
	<li>
		Backend-end
		<div class="tags-container">
			<span class="tag">Django</span>
			<span class="tag">Go Lang</span>
			<span class="tag">Laravel</span>
			<span class="tag">Firbase</span>
			<span class="tag">RestApi</span>
		</div>
	</li>
	<li>
		Language
		<div class="tags-container">
			<span class="tag">Python</span>
			<span class="tag">Go</span>
			<span class="tag">Java</span>
			<span class="tag">C</span>
			<span class="tag">Java Script</span>
			<span class="tag">SQL</span>
		</div>
	</li>
</ul>

<style lang="scss">
	.resume-skills {
		list-style: none;
		padding: 0;
		margin: 0;
	}

  .tags-container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 2px 0 5px;
	}

	.tag {
		background-color: var(--primary-lightest-color);
		border: 1px solid var(--primary-color);
		color: var(--primary-color);
		border-radius: 0.25em;
		display: inline-block;
		font-size: 0.75em;
		line-height: 2em;
		margin: 0.125em;
		padding: 0 0.5em;
		text-decoration: none;
		white-space: nowrap;

		&.secondary {
			background-color: var(--secondary-lightest-color);
			border: 1px solid var(--secondary-color);
			color: var(--secondary-color);
		}
	}
</style>
