import { useModalStore } from '@/stores/modalStore';

export default function () {
  const store = useModalStore();

  store.openModal('Расскажите о себе и своем опыте');
}
