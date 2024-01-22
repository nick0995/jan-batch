export default function CoreConcept({ image, title, description }) {
    console.log('EXECUTING CORE CONCEPTS');
      return (
        <li>
          <img src={image}  alt={title}/>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      )
}