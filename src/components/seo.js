/**
 * Datos estructurados de Schema.org (JSON-LD) para SEO local.
 *
 * El establecimiento se describe como LodgingBusiness (alojamiento con
 * varias unidades independientes) y cada cabaña como Accommodation dentro de él.
 * Solo se incluyen datos confirmados: lo que está en null en la configuración
 * (teléfono, correo, horarios, dirección postal) se omite automáticamente.
 */
import { amenities, sharedSpaces } from '../data/amenities.js';
import { cabins } from '../data/cabins.js';

const CONTEXT = 'https://schema.org';

export const lodgingId = (ctx) => ctx.abs('/#alojamiento');

function compact(object) {
  return Object.fromEntries(Object.entries(object).filter(([, value]) => value !== null && value !== undefined));
}

export function lodgingBusiness(ctx) {
  const { site, pick, t } = ctx;
  const { location, contact, stay } = site;
  const shareImages = ['exterior-cabanas-arbol-florido', 'vista-piscina-cerros', 'piscina-valle', 'quincho-mesa-larga'].map((id) => {
    const photo = ctx.images.get(id);
    return ctx.abs(photo.og ?? ctx.images.url(photo, 1200));
  });

  return compact({
    '@context': CONTEXT,
    '@type': 'LodgingBusiness',
    '@id': lodgingId(ctx),
    name: site.name,
    alternateName: site.alternateName,
    slogan: pick(site.tagline),
    description: ctx.content.seo.home.description,
    url: ctx.abs('/'),
    logo: ctx.abs('/icon-512.png'),
    image: shareImages,
    telephone: contact.phone,
    email: contact.email,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'reservations',
      url: ctx.whatsapp(t('whatsappDefault')),
      availableLanguage: ['es'],
    },
    address: compact({
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: `${location.community}, ${location.municipality}`,
      addressRegion: location.region,
      addressCountry: location.country,
    }),
    geo: { '@type': 'GeoCoordinates', latitude: location.geo.lat, longitude: location.geo.lng },
    hasMap: ctx.maps.place,
    sameAs: site.social.map((network) => network.url),
    numberOfRooms: cabins.length,
    checkinTime: stay.checkIn,
    checkoutTime: stay.checkOut,
    amenityFeature: Object.values(sharedSpaces).map((space) => ({
      '@type': 'LocationFeatureSpecification',
      name: pick(space.label),
      value: true,
    })),
    containsPlace: cabins.map((cabin) => ({ '@id': `${ctx.abs(ctx.cabinUrl(cabin))}#cabana` })),
  });
}

export function website(ctx) {
  return {
    '@context': CONTEXT,
    '@type': 'WebSite',
    '@id': ctx.abs('/#sitio'),
    name: ctx.site.name,
    alternateName: ctx.site.alternateName,
    url: ctx.abs('/'),
    inLanguage: ctx.lang,
    publisher: { '@id': lodgingId(ctx) },
  };
}

export function accommodation(ctx, cabin) {
  const { pick, t } = ctx;
  const url = ctx.abs(ctx.cabinUrl(cabin));
  return {
    '@context': CONTEXT,
    '@type': 'Accommodation',
    '@id': `${url}#cabana`,
    name: `${pick(cabin.name)} · ${ctx.site.name}`,
    description: pick(cabin.summary),
    url,
    image: cabin.photos.slice(0, 6).map((id) => ctx.abs(ctx.images.url(ctx.images.get(id), 1200))),
    occupancy: { '@type': 'QuantitativeValue', maxValue: cabin.guests, unitCode: 'C62' },
    floorSize: { '@type': 'QuantitativeValue', value: cabin.area, unitCode: 'MTK' },
    numberOfBathroomsTotal: cabin.bathrooms,
    bed: cabin.beds.map((bed) => ({
      '@type': 'BedDetails',
      numberOfBeds: bed.count,
      typeOfBed: t(`cabin.beds.${bed.type}`, { n: 1 }).replace(/^1\s+/, ''),
    })),
    amenityFeature: cabin.equipment.map((key) => ({
      '@type': 'LocationFeatureSpecification',
      name: pick(amenities[key].label),
      value: true,
    })),
    containedInPlace: { '@id': lodgingId(ctx) },
  };
}

export function cabinItemList(ctx) {
  return {
    '@context': CONTEXT,
    '@type': 'ItemList',
    name: ctx.content.cabins.title,
    itemListElement: cabins.map((cabin, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: ctx.abs(ctx.cabinUrl(cabin)),
      name: ctx.pick(cabin.name),
    })),
  };
}

export function breadcrumbList(ctx, items) {
  return {
    '@context': CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: ctx.abs(item.href),
    })),
  };
}

export function faqPage(ctx, items) {
  return {
    '@context': CONTEXT,
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: ctx.pick(item.q),
      acceptedAnswer: { '@type': 'Answer', text: ctx.pick(item.a) },
    })),
  };
}

export function touristDestination(ctx, destinations) {
  return {
    '@context': CONTEXT,
    '@type': 'TouristDestination',
    name: 'Tarija',
    description: ctx.content.seo.tarija.description,
    url: ctx.abs(ctx.url('tarija')),
    containedInPlace: { '@type': 'Country', name: 'Bolivia' },
    includesAttraction: destinations.map((destination) => ({
      '@type': 'TouristAttraction',
      name: ctx.pick(destination.title),
      description: ctx.pick(destination.text),
    })),
  };
}
