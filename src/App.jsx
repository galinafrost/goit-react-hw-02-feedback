import Section from './components/shared/Section'
import AllFeedback from "./components/Feedback/AllFeedback";

export default function App() {
  return (
    <div className='container'>
      <Section title="Feedback">
      <AllFeedback />
      </Section>
    </div>
  );
}
