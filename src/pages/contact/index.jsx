import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../../ui/section-title";

const Modal = ({ message, isSuccess, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-80 text-center">
        <h2
          className={`text-lg font-semibold ${
            isSuccess ? "text-green-400" : "text-red-400"
          }`}
        >
          {isSuccess ? "Sucesso!" : "Erro!"}
        </h2>
        <p className="mt-2">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md"
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export default function Contact() {
  const form = useRef();
  const [modal, setModal] = useState({
    show: false,
    message: "",
    isSuccess: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qygazoh",
        "template_i8lnw3a",
        form.current,
        "W5kHyWXkNzqx6qsFW"
      )
      .then(() => {
        setModal({
          show: true,
          message: "Mensagem enviada com sucesso!",
          isSuccess: true,
        });
        form.current.reset();
      })
      .catch(() => {
        setModal({
          show: true,
          message: "Erro ao enviar a mensagem, tente novamente mais tarde.",
          isSuccess: false,
        });
      });
  };

  return (
    <div className="contact-area text-center my-12 px-4">
      <SectionTitle title="Entre em" span="Contato" />
      <form
        className="backdrop-blur-md p-5 mx-auto text-justify mt-10 bg-gradient-to-br from-white/2 via-gray-900/10 to-purple-900/10 border-purple-900 border rounded-lg max-w-2xl"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Nome
          </label>
          <input
            type="text"
            name="form_name"
            placeholder="John Doe"
            className="bg-white/2 border border-indigo-900 text-sm md:w-100 rounded-md block w-full p-2.5 focus:outline-none focus:border-indigo-500 text-gray-400"
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Email
          </label>
          <input
            type="email"
            name="reply_to"
            placeholder="seu.email@exemplo.com"
            className="bg-white/2 border border-indigo-900 text-sm rounded-md block w-full md:w-100 p-2.5 focus:outline-none focus:border-indigo-500 text-gray-400"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Mensagem
          </label>
          <textarea
            name="message"
            rows="4"
            className="bg-white/2 border border-indigo-900 text-sm rounded-md block p-2.5 w-full md:w-100 text-sm focus:outline-none focus:border-indigo-500 text-gray-400"
            required
            placeholder="Escreva aqui sua mensagem..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex flex-col items-center justify-center transition w-50 mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700  hover:bg-gradient-to-br focus:outline-none font-medium rounded-lg py-2.5 text-center my-5 "
        >
          Enviar
        </button>
      </form>

      {modal.show && (
        <Modal
          message={modal.message}
          isSuccess={modal.isSuccess}
          onClose={() => setModal({ ...modal, show: false })}
        />
      )}
    </div>
  );
}
