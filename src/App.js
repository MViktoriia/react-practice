import PaintingList from './components/Paintings/PaintingList';
import paintings from './components/Paintings/paintings.json';
import Section from './components/Section/Section';
import Counter from './components/Counter/Counter';

export default function App() {
  return (
    <div>
      <Section title="Top of the week">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Counter">
        <Counter />
      </Section>
    </div>
  );
}
