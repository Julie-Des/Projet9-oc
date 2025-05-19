import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 500); });

const Form = ({ onSuccess = () => null, onError = () => null }) => {
  const [sending, setSending] = useState(false);
  
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    message: "",
    select: ""
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();

      if (!formData.email || !formData.message) {
        return; 
      }

      setSending(true);
      try {
        await mockContactApi();
        setSending(false);
        onSuccess();
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [formData, onSuccess, onError]
  );

  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          <Field
            placeholder=""
            label="Nom"
            name="nom"
            type={FIELD_TYPES.INPUT_TEXT}
            value={formData.nom}
            onChange={(val) => handleChange("nom", val)}
            error={false}
          />
          <Field
            placeholder=""
            label="Prénom"
            name="prenom"
            type={FIELD_TYPES.INPUT_TEXT}
            value={formData.prenom}
            onChange={(val) => handleChange("prenom", val)}
            error={false}
          />
          <Select
            selection={["Personel", "Entreprise"]}
            onChange={(val) => handleChange("select", val)}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
            name="select"
            value={formData.select}
            error= {false}
          />
          <Field
            placeholder=""
            label="Email"
            name="email"
            type={FIELD_TYPES.INPUT_TEXT}
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
            error={!formData.email}
          />
          <Button
            title="envoyer"
            type={BUTTON_TYPES.SUBMIT}
            disabled={sending}
            onClick={sendContact}
          >
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            placeholder="message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
            name="message"
            value={formData.message}
            onChange={(val) => handleChange("message", val)}
            error={!formData.message}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired
};

export default Form;
