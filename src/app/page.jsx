import { Card } from "./components/card";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

export default function Home() {
  return (
        <main>
          <section>
            <div class="container">
              <div class="row">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
              </div>
            </div>
          </section>
        </main>
  );
}

