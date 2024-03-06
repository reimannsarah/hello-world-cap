import appStrings from "../assets/text/appStrings";
import Form from "../components/Form";

export default function Home() {

  
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="text-9xl mt-44">{appStrings.title}</div>
        <div className="flex flex-col items-center">
          <div>
            <p>{appStrings.input}</p>
          </div>
        </div>
        <Form />
      </div>
    </main>
  );
}
