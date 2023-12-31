<script setup>
useHead({
  title: "Технологические вызовы | Энерготехнохаб Петербург",
  meta: [
    {
      name: "description",
      content:
        "Энерготехнохаб Петербург. Мы — точка притяжения для инженеров и предпринимателей готовых запустить deep-tech стартап в энергетической отрасли.",
    },
  ],
});

const modalStore = useModalWithSlotStore();

const selectedCard = ref(null);

const handleLabelClick = (card) => {
  selectedCard.value = card;
  modalStore.openModal();
};

const searchStore = useSearchStore();

const mockSearchFilters = [
  "Альтернативная энергетика",
  "Нефтехимия",
  "Теплоомбен",
  "КИПы",
  "СПГ",
];

const mockData = [
  {
    title: "Водородная энергетика",
    text: "Промышленное использование водорода является сложным процессом, связанным с высокой летучестью и потенциально опасной природой этого газа. Однако перспективность развития водородной энергетики требует решения задач, связанных с хранением и перевозкой водорода.",
    label: "Альтернативная энергетика",
  },
  {
    title: "Повышение текучести смазочных масел",
    text: "Внезапно, активно развивающиеся страны третьего мира являются только методом политического участия и превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.",
    label: "Нефтехимия",
  },
  {
    title: "Анализ состава и содержания воды, нефти и газа в одном потоке",
    text: "Измерения расхода среды позволяет контролировать потоки нефти, газа и других веществ с высокой точностью. Сегодня для анализа содержания компонентов в одном потоке используется зарубежное оборудование. ",
    label: "КИПы",
  },
  {
    title: "Обеспечение противозадирных свойств смазочных масел",
    text: "Ключевые свойства смазочным материалам обеспечивают противозадирные присадки. Сохраняют нормальную работу при высоких нагрузках трущихся поверхностей. Сегодня на рынке отсутствуют отечественные решения по повышению противозадирных свойств присадок.",
    label: "Нефтехимия",
  },
  {
    title: "Реагенты для нефтепереработки",
    text: "Для выделения нефтепродуктов и предотвращения разрушения оборудования в нефтепереработке используются реагенты. Сегодня для разделения нефти используются химические вещества, производство которых еще не налажено в России.",
    label: "Нефтехимия",
  },
  {
    title: "Сжижение природного газа",
    text: "Получение СПГ сегодня происходит либо при помощи зарубежных технологий, либо благодаря использованию многокомпонентных газовых смесей, что не окупается из-за высоких энергозатрат и стоимости. ",
    label: "СПГ",
  },
  {
    title: "Контроль уровня жидкости в промышленных ёмкостях",
    text: "В системах контроля уровня жидкости в промышленных емкостях сегодня используется зарубежное оборудование.",
    label: "КИПы",
  },
  {
    title: "Перенос тепла в среде водородосодержащего газа",
    text: "Поддержание тепла в среде водородосодержащего газа в процессе каталитического риформинга требует использования теплообменников.",
    label: "Теплоомбен",
  },
  {
    title: "Измерение массового расхода воды, нефти и газа в одном потоке",
    text: "Приборы для контроля за составом нефти необходимы как в процессе добычи нефти, так и в ходе нефтепереработки на заводах. Сегодня используется зарубежное оборудование.",
    label: "КИПы",
  },
];
</script>

<template>
  <div class="container">
    <SharedHero
      title="Технологические вызовы 1"
      text="Актуальные отраслевые задачи, решение которых — потенциальный бизнес"
      class="challenges-hero"
    />
    <SharedSearch
      v-model:searchValue="searchStore.searchInput"
      :filters="mockSearchFilters"
      placeholder="Поиск"
      :isMenuOpen="searchStore.iMenuOpen"
      :onFiltersClick="searchStore.toggleMenu"
      :onEmptyFilters="searchStore.emptyFilters"
      :store="searchStore"
    />
    <CommonText
      :text="`${mockData.length} вызовов`"
      size="xl"
      theme="dark"
      weight="normal"
      class="challenges-count"
    />
    <div class="card-list">
      <ChallengesCard
        v-for="card in mockData"
        :key="card.title"
        :title="card.title"
        :text="card.text"
        :label="card.label"
        :onClick="() => handleLabelClick(card)"
      />
    </div>
  </div>
  <Teleport to="body">
    <ModalWithSlot>
      <div @click.stop>{{ selectedCard?.title }}</div>
    </ModalWithSlot>
  </Teleport>
</template>

<style lang="scss" scoped>
.challenges-hero {
  margin-bottom: 20px;

  @include lg {
    margin-bottom: 16px;
  }

  @include md {
    margin-bottom: 14px;
  }
}

.challenges-count {
  margin-bottom: 20px;

  @include lg {
    margin-bottom: 16px;
  }
}

.card-list {
  margin-bottom: 140px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;

  grid-gap: 20px;

  @include lg {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
  @include md {
    grid-template-columns: 1fr;
  }
}
</style>
