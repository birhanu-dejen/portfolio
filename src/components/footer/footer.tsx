function FooterSection() {
  return (
    <section>
      <footer className="flex justify-center px-6 py-8 ">
        <span className="text-gray-900 ">
          {" "}
          &copy; {new Date().getFullYear()} No rights reserved :)
        </span>
      </footer>
    </section>
  );
}
export default FooterSection;
