/**
 * Opiniones de huéspedes.
 *
 * Solo testimonios reales y con autorización de la persona. La sección de
 * opiniones aparece automáticamente en la portada cuando hay al menos uno.
 *
 * Formato de cada testimonio:
 * {
 *   quote: { es: 'Texto de la opinión.' },
 *   author: 'Nombre (o nombre e inicial)',
 *   origin: { es: 'Ciudad, país' },
 *   date: '2026-09',              // año y mes de la estadía
 *   source: 'Airbnb',             // 'Airbnb' | 'Google' | 'Facebook' | 'Directo'
 *   sourceUrl: null,              // enlace a la reseña pública, si existe
 *   rating: 5,                    // opcional, de 1 a 5
 *   cabin: 'cabana-4',            // opcional, id de la cabaña
 * }
 */
export const testimonials = [];
