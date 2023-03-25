<template>
    <div class="card">
        <div class="card-header">
            Note
        </div>
        <div class="card-body">
            <div class="note-text" v-if="!isEditing" @click="startEditing" v-html="note">

            </div>
            <div v-else>
                <textarea rows="5" class="form-control mb-2" v-model="note" @blur="saveNote"
                    ref="editableTextarea"></textarea>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useNoteStore } from '@/store/modules/note';
import { storeToRefs } from 'pinia';
import { nextTick, ref } from 'vue';

const noteStore = useNoteStore()
const { note } = storeToRefs(noteStore);
const isEditing = ref(false);
const editableTextarea = ref<HTMLTextAreaElement>();

async function startEditing() {
    isEditing.value = true;
    await nextTick();
    editableTextarea.value?.focus();
}

function saveNote() {
    isEditing.value = false;
}
</script>

<style scoped lang="scss">
.note-text {
    white-space: pre-line;
    max-height: 500px;
    overflow-y: auto;
}
</style>
  