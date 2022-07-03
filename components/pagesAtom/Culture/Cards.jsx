import React from 'react'
import Card from './Card'

const aliens = [
    {id: 1, name: 'alien1', title: 'Buenas Personas', text: 'Humildad, respeto y carisma rodea nuestro dia a dia. Tener mascotas no necesariamente te hace mejor persona pero ¿Sabias que por cada uno de nuestros launchers en promedio hay 1,83 Mascotas? #Petfriendly'},
    {id: 2, name: 'alien2', title: 'Flasheros', text: '¿Como resaltar en un mundo donde todos nos copiamos entre todos para una mejora constante? Marcando tendencias ! Nuestro equipo maneja un refran informal pero interesante para cada nuevo desafio: “Fumatela”.'},
    {id: 3, name: 'alien3', title: 'Estratégicos', text: 'Para lograr un objetivo se necesitan estrategias, pero para lograr estrategias hay que plantear tacticas, y para  realizar tacticas hay que aplicar accionables.'},
    {id: 4, name: 'alien6', title: 'Curiosos', text: 'Ser curiosos nos hace constantemente replantearnos lo que hacemos ¿Vamos por buen camino? ¿Como podemos mejorarlo? Ser curioso nos da el empujon para subirnos a la tendencia.'},
    {id: 5, name: 'alien5', title: 'Constante Aprendizaje', text: 'En Launchy todos los meses hacemos premiaciones al Launcher que mas puntos haya conseguido en base a aprendizajes. El mes pasado fue un '},
    {id: 6, name: 'alien4', title: 'Conscientes', text: 'Buscamos mejorar el mundo a través de nuestros proyectos y por fuera. Es por eso que desde Launchy ayudamos a una fundación de rescate de animales. ¡Y es solo el inicio! ¿Te unis a nuestra filosofía?'},
]

const Cards = () => {
  return (
    <div className='px-[8%] mt-[60px] md:mt-[80px]'>

        <h2 className='text-white text-center text-xl tracking-wider mb-[40px] md:mb-[60px]'>Apostamos por ser especialistas en diversas areas para formar equipos multidisciplinarios que aporten mas valor</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
            aliens.map(alien => (
                <Card 
                    alien={alien.name}
                    title={alien.title}
                    text={alien.text}
                    key={alien.id}
                />
            ))
            }
        </div>
        
    </div>
  )
}

export default Cards