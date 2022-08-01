import { RenderList } from '~/utils';
import { useActiveCarouselItemIndex } from './ActiveCarouselItemIndex.hook';

interface ICarouselProps<TCarouselItem> {
  items: Array<TCarouselItem>;
  children(active: boolean, item: TCarouselItem, index: number): JSX.Element;
}

export function Carousel<TCarouselItem>({
  items,
  children,
}: ICarouselProps<TCarouselItem>): JSX.Element {
  const activeCarouselItemIndex = useActiveCarouselItemIndex(...items);

  return (
    <RenderList
      items={items}
      renderItem={(item, index) =>
        children(activeCarouselItemIndex === index, item, index)
      }
    />
  );
}
