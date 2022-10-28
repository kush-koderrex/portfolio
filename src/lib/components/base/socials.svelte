<script>
  import TelegramIcon from '$lib/svg/socials/telegram.svelte';
  import TwitterIcon from '$lib/svg/socials/twitter.svelte';
  import GitHubIcon from '$lib/svg/socials/github.svelte';
  import LinkedInIcon from '$lib/svg/socials/linkedin.svelte';
  import EmailIcon from '$lib/svg/socials/email.svelte';
  import Youtube from '$lib/svg/socials/youtube.svelte';
</script>

<div class="socials">
  <!-- <a href="https://t.me/Matt_Fantinel" target="_blank" rel="noopener" title="Say Hi on Telegram">
    <TelegramIcon />
  </a> -->
  <a href="https://twitter.com/kush36408286" target="_blank" rel="noopener" title="Say Hi on Twitter">
    <TwitterIcon />
  </a>
  <a href="https://github.com/kush-koderrex" target="_blank" rel="noopener" title="See my GitHub profile">
    <GitHubIcon />
  </a>
  <a href="https://www.linkedin.com/in/kush-kumar-139084183/" target="_blank" rel="noopener" title="Connect on LinkedIn">
    <LinkedInIcon />
  </a>
  <a href="mailto:kushkumar89792666@gmail.com" target="_blank" rel="noopener" title="Send an email to matt@fantinel.dev">
    <EmailIcon />
  </a>
  <a href="https://www.youtube.com/channel/UC6ATR2JWLfIlMMWD5rUQvEA" target="_blank" rel="noopener" title="Subscribe to my Youtube Channel">
    <Youtube />
  </a>
  <!-- <a href="/rss.xml" target="_blank" rel="noopener" title="Subscribe to my RSS Feed">
    <Rss />
  </a> -->
</div>

<style lang="scss">
  @import '../../scss/breakpoints.scss';
  .socials {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      width: 24px;
      color: var(--text-color);
      fill: var(--text-color);

      &:hover {
        color: var(--link-highlight-color);
        fill: var(--link-highlight-color);
      }
    }
  }

</style>