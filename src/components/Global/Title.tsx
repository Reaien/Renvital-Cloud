type Props = {
  titulo: String;
  subTitulo: String;
};

function Title({ titulo, subTitulo }: Props) {
  return (
    <section className="grid justify-center text-center mt-16">
      <p className="text-4xl lg:text-7xl text-emerald-700 font-semibold">
        {titulo}
      </p>
      <p className="italic text-lg">{subTitulo}</p>
    </section>
  );
}

export default Title;
