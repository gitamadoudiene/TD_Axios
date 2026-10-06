/*
 * ============================================================================
 *  TD AXIOS : Annuaire d'utilisateurs  (exercice préparatoire au mini défi)
 * ============================================================================
 *
 *  OBJECTIF
 *  Envoyer une requête GET avec Axios, récupérer la réponse et l'afficher :
 *    - les données (response.data)
 *    - les informations de la réponse (status, statusText, headers)
 *    - un message pendant le chargement
 *    - un message si la requête échoue
 *
 *  API UTILISÉE (publique et gratuite, aucune clé nécessaire)
 *    GET https://jsonplaceholder.typicode.com/users
 *    → renvoie un tableau de 10 utilisateurs.
 *    Ouvrez d'abord cette URL dans votre navigateur pour observer le JSON :
 *    repérez les champs name, email, phone, address.city et company.name.
 *
 *  MISE EN PLACE (projet Vite + React + Tailwind)
 *    npm create vite@latest td-axios -- --template react
 *    cd td-axios
 *    npm install axios tailwindcss @tailwindcss/vite
 *    → vite.config.js : ajouter le plugin tailwindcss() de "@tailwindcss/vite"
 *    → src/index.css  : remplacer le contenu par  @import "tailwindcss";
 *    → src/App.jsx    : importer ce composant et l'afficher : <UserList />
 *    npm run dev
 *
 *  ÉTAT DE DÉPART
 *  Ce composant s'affiche, mais il ne fonctionne pas : aucune requête n'est
 *  envoyée et la liste reste vide. L'interface (Tailwind) est déjà prête.
 *  Votre travail : compléter les TODO dans l'ordre, de 1 à 6.
 *  Ne modifiez pas les classes Tailwind : concentrez-vous sur Axios et React.
 *
 *  DURÉE CONSEILLÉE : 45 min à 1 h
 * ============================================================================
 */

// TODO 1 : Importer useState et useEffect depuis "react",
//          puis importer axios depuis "axios".

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function UserList() {
  // --------------------------------------------------------------------------
  // TODO 2 : Remplacer ces constantes par des states avec useState.
  //   - users    : la liste des utilisateurs (valeur de départ : tableau vide)
  //   - loading  : true pendant la requête (valeur de départ : true)
  //   - error    : le message d'erreur (valeur de départ : null)
  //   - meta     : les infos de la réponse (valeur de départ : null)
  //                → un objet { status, statusText, contentType }
  //
  //   Exemple : const [users, setUsers] = useState([]);
  // --------------------------------------------------------------------------
  const users = [];
  const loading = false;
  const error = null;
  const meta = null;

  // --------------------------------------------------------------------------
  // TODO 3 : Écrire une fonction asynchrone fetchUsers qui :
  //   a) passe loading à true et remet error à null
  //   b) dans un try : envoie une requête GET vers API_URL avec axios.get()
  //   c) affiche la réponse complète dans la console : console.log(response)
  //      → observez l'objet : data, status, statusText, headers, config
  //   d) enregistre response.data dans users
  //   e) enregistre dans meta : response.status, response.statusText
  //      et response.headers["content-type"]
  //   f) dans le catch : enregistre un message d'erreur clair dans error
  //      (astuce : error.response existe si le serveur a répondu avec une erreur)
  //   g) dans le finally : repasse loading à false
  // --------------------------------------------------------------------------

  // --------------------------------------------------------------------------
  // TODO 4 : Avec useEffect, appeler fetchUsers une seule fois,
  //          au premier affichage du composant.
  //          Question : quel tableau de dépendances faut-il utiliser ?
  // --------------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-5xl">
        {/* En-tête */}
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-violet-600">
              TD Axios
            </p>
            <h1 className="text-3xl font-bold text-slate-900">Annuaire des utilisateurs</h1>
            <p className="mt-1 text-slate-500">
              Données récupérées depuis jsonplaceholder.typicode.com
            </p>
          </div>

          {/* TODO 6 (bonus) : au clic, relancer la requête avec fetchUsers.
                               Ajoutez onClick et disabled={loading}. */}
          <button className="rounded-lg bg-violet-600 px-4 py-2 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-50">
            Recharger
          </button>
        </header>

        {/* Panneau « Réponse HTTP » : affiche les infos récupérées dans meta */}
        <section className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase text-slate-400">Status</p>
            {/* TODO 5c : afficher meta.status (ou "—" si meta est null) */}
            <p className="mt-1 font-mono text-2xl font-bold text-emerald-600">—</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase text-slate-400">Status text</p>
            {/* TODO 5c : afficher meta.statusText */}
            <p className="mt-1 font-mono text-2xl font-bold text-slate-800">—</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase text-slate-400">Résultats</p>
            {/* TODO 5c : afficher le nombre d'utilisateurs reçus (users.length) */}
            <p className="mt-1 font-mono text-2xl font-bold text-slate-800">0</p>
          </div>
          <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
            <p className="text-xs font-semibold uppercase text-slate-400">Content-Type</p>
            {/* TODO 5c : afficher meta.contentType */}
            <p className="mt-1 truncate font-mono text-sm font-bold text-slate-800">—</p>
          </div>
        </section>

        {/* ------------------------------------------------------------------
            TODO 5a : Si loading vaut true, afficher uniquement ce bloc.
            ------------------------------------------------------------------ */}
        <div className="rounded-xl bg-white p-10 text-center text-slate-500 shadow-sm ring-1 ring-slate-200">
          Chargement des utilisateurs...
        </div>

        {/* ------------------------------------------------------------------
            TODO 5b : Si error n'est pas null, afficher ce bloc avec le
                      message contenu dans error (à la place du texte fixe).
            ------------------------------------------------------------------ */}
        <div className="mt-4 rounded-xl bg-red-50 p-6 text-red-700 ring-1 ring-red-200">
          <p className="font-semibold">Erreur</p>
          <p>Le message d'erreur s'affichera ici.</p>
        </div>

        {/* ------------------------------------------------------------------
            TODO 5d : Afficher la liste avec users.map().
              - une carte <li> par utilisateur, avec key={user.id}
              - remplacer les textes d'exemple par les vraies données :
                user.name, user.email, user.phone,
                user.address.city, user.company.name
              - la première lettre du nom va dans la pastille ronde :
                user.name.charAt(0)
            La carte ci-dessous est un MODÈLE : gardez sa structure.
            ------------------------------------------------------------------ */}
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-lg font-bold text-violet-700">
                A
              </span>
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">Nom de l'utilisateur</p>
                <p className="truncate text-sm text-slate-500">email@exemple.com</p>
              </div>
            </div>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Téléphone</dt>
                <dd className="truncate text-slate-700">00 00 00 00</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Ville</dt>
                <dd className="truncate text-slate-700">Ville</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="text-slate-400">Entreprise</dt>
                <dd className="truncate text-slate-700">Entreprise</dd>
              </div>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  );
}

/*
 * ============================================================================
 *  POUR ALLER PLUS LOIN (bonus)
 * ============================================================================
 *  B1. Simulez une erreur : remplacez temporairement API_URL par
 *      ".../userss" (avec deux s). Quel status s'affiche dans la console ?
 *      Votre bloc d'erreur apparaît-il ? Remettez ensuite la bonne URL.
 *
 *  B2. Coupez votre connexion Internet (ou passez l'onglet Réseau de
 *      DevTools en « Offline ») puis cliquez sur « Recharger ».
 *      Quelle propriété de l'erreur est remplie : error.response ou error.request ?
 *
 *  B3. Récupérez un seul utilisateur avec GET /users/1.
 *      Que contient response.data cette fois : un tableau ou un objet ?
 *
 *  QUESTIONS À RÉPONDRE PAR ÉCRIT
 *  Q1. Que renvoie axios.get() avant que la réponse n'arrive ?
 *  Q2. Pourquoi n'écrit-on pas useEffect(async () => { ... }) ?
 *  Q3. Pourquoi le bloc finally est-il le bon endroit pour setLoading(false) ?
 *  Q4. Avec fetch(), une erreur 404 déclenche-t-elle le catch ? Et avec Axios ?
 * ============================================================================
 */
