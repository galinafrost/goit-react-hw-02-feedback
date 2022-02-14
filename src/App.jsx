import Section from './components/shared/Section'
import AllFidback from "./components/Feedback/AllFidback";

export default function App() {
  return (
    <div className='container'>
      <Section title="Fidback">
      <AllFidback />
      </Section>
    </div>
  );
}
