import {useLocalStorage} from '@mantine/hooks';
import {Select} from '@mantine/core';

const scales: Record<string, number> = {
  'Extra Small': 50,
  Small: 75,
  Normal: 100,
  Large: 125,
  'Extra Large': 150,
};

export default function UIScalePicker() {
  const [uiScale, setUIScale] = useLocalStorage<string | null>({
    key: 'ui-scale',
    defaultValue: 'Normal',
  });
  document.documentElement.style.fontSize = `${getScale(uiScale)}%`;

  return (
    <Select
      defaultValue={uiScale}
      value={uiScale}
      data={Object.keys(scales)}
      onChange={setUIScale}
    />
  );
}

function getScale(categoricalScale: string | undefined | null) {
  if (categoricalScale) {
    const scale = scales[categoricalScale];
    return scale;
  }
}
