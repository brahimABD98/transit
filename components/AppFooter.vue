<script lang="ts" setup>
import { Icon } from '#components'

const currentYear = ref(new Date().getFullYear())

const emojiCode = ref(10084);

const changeEmoji = () => {
    emojiCode.value = 128512 + Math.floor(Math.random() * 30);
}
</script>
<template>
    <footer class="footer footer-center p-4 bg-base-200 text-base-content">
        <aside>

            <button class='cursor-pointer' @click="changeEmoji">
                <p v-html="$t('footer.message', { currentYear, emojiCode })"></p>
            </button>

        </aside>
    </footer>
</template>