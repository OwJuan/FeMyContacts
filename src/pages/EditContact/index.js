import PageHeader from '../../components/PageHeader/Index';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  return (
    <>
      <PageHeader
        title="Editando Juan Freitas"
      />

      <ContactForm
        buttonLabel="Salvar alterações"
      />
    </>
  );
}
