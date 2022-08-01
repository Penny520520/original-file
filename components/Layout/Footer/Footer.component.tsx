import { ContactDetails } from './ContactDetails.component';
import { ContactForm } from './ContactForm.component';
import styles from './Footer.styles.module.scss';

export function Footer(): JSX.Element {
  return (
    <footer className={styles.container}>
      <section className={styles.contactInfo}>
        <ContactForm />
        <ContactDetails />
      </section>
    </footer>
  );
}
