<script setup lang="ts">
interface Props {
  searchValue: string;
  placeholder?: string;
  filters: string[];
  isMenuOpen: boolean;
  onFiltersClick: () => void;
  onEmptyFilters: () => void;
  store?: unknown;
}

defineProps<Props>();

const emit = defineEmits(["update:searchValue"]);

const updateSearch = (e) => {
  emit("update:searchValue", e.target.value);
};
</script>

<template>
  <div class="search-wrapper">
    <div class="search">
      <img src="images/icons/search.svg" class="icon" width="18" height="18" />
      <input
        class="search__input"
        type="search"
        :placeholder="placeholder"
        :value="searchValue"
        @input="updateSearch"
        autocomplete="on"
      />
    </div>
    <div class="filter" @click="onFiltersClick">
      <img src="images/icons/filters.svg" class="icon" width="18" height="18" />
      <p class="filter__text">Фильтры</p>
    </div>
    <div v-if="isMenuOpen" class="filters">
      <label v-for="box in filters" :key="box" :for="box" class="cbx-container">
        <input
          v-model="store.checkedFilters"
          type="checkbox"
          :id="box"
          :value="box"
        />
        <span class="checkmark"></span>
        <p class="check-text">{{ box }}</p>
      </label>
      <button class="check-empty-btn" @click="onEmptyFilters">Сбросить</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
@import "./Search.scss";
</style>
