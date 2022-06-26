<script lang="ts">
	import DarkThemeToggle from './dark-theme-toggle.svelte';
</script>

<footer class="mt-auto flex flex-col bg-skin-contrast px-16 py-20 dark:bg-skin-off-background">
	<ul class="flex justify-center gap-4">
		<li>
			<a href="https://www.twitter.com/CahlLagerfeld">
				<i
					class="fa-brands fa-twitter fa-2xl text-skin-off  transition-all delay-[50] duration-200 hover:text-[#1DA1F2]"
				/>
			</a>
		</li>
		<li>
			<a href="https://www.github.com/Cahllagerfeld">
				<i
					class="fa-brands fa-github fa-2xl text-skin-off transition-all delay-[50] duration-200 hover:text-gray-500"
				/>
			</a>
		</li>
	</ul>
	<div class="mt-12 flex items-center justify-center gap-4">
		<p class="text-center text-skin-off">© 2022</p>
		<DarkThemeToggle />
	</div>
</footer>
