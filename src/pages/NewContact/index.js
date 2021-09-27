import PageHeader from '../../components/PageHeader/Index';

import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
