
const messages = {
  es: {
    nav_home: 'Inicio', nav_services: 'Servicios', nav_about: 'Nosotros', nav_contact: 'Contacto',
    hero_title: 'Tablas gourmet elegantes y deliciosas',
    hero_sub: 'Creamos Cheese Boards y charcutería personalizadas para cada ocasión. Envíos a todo Costa Rica.',
    cta_services: 'Ver servicios',
    about_title: 'Nosotros',
    about_text: 'Somos una empresa dedicada a la creación de Tablas de queso y Charcutería personalizadas según la necesidad de cada cliente. Trabajamos con productos premium; nos aseguramos de que cada Cheese Board refleje frescura y calidad.',
    services_title: 'Servicios',
    svc_variety_title: 'Cheese Boards para cada evento',
    svc_variety_text: 'Mini boards para eventos corporativos, reuniones pequeñas, cumpleaños y detalles personalizados.',
    svc_pairing_title: 'Maridaje',
    svc_pairing_text: 'Te sugerimos el maridaje ideal para tu tabla: charcutería + vino.',
    svc_shipping_title: 'Envíos',
    svc_shipping_text: 'Envíos a todo Costa Rica. Envío rápido en el GAM.',
    svc_custom_title: 'Personalización',
    svc_custom_text: 'Cheese Boards personalizadas según tu gusto y ocasión.',
    contact_title: 'Contacto',
    contact_email_label: 'Correo:',
    contact_phone_label: 'Teléfono:',
    contact_help: 'Todos los campos marcados con * son obligatorios.',
    field_name: 'Nombre *', field_email: 'Correo electrónico *', field_message: 'Mensaje *',
    cta_send: 'Enviar', cta_whatsapp: 'Escríbenos por WhatsApp',
    all_rights: 'Todos los derechos reservados'
  },
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_about: 'About', nav_contact: 'Contact',
    hero_title: 'Elegant, delicious gourmet boards',
    hero_sub: 'We craft personalized cheese & charcuterie boards for every occasion. Nationwide delivery in Costa Rica.',
    cta_services: 'See services',
    about_title: 'About us',
    about_text: 'We specialize in personalized cheese and charcuterie boards tailored to each client. We use premium products to ensure freshness and quality in every board.',
    services_title: 'Services',
    svc_variety_title: 'Boards for every event',
    svc_variety_text: 'Mini boards for corporate events, small gatherings, birthdays and personalized gifts.',
    svc_pairing_title: 'Pairing',
    svc_pairing_text: 'We suggest the perfect pairing for your board: charcuterie + wine.',
    svc_shipping_title: 'Shipping',
    svc_shipping_text: 'Delivery throughout Costa Rica. Fast delivery in the GAM.',
    svc_custom_title: 'Customization',
    svc_custom_text: 'Personalized boards for your taste and occasion.',
    contact_title: 'Contact',
    contact_email_label: 'Email:',
    contact_phone_label: 'Phone:',
    contact_help: 'Fields marked with * are required.',
    field_name: 'Name *', field_email: 'Email *', field_message: 'Message *',
    cta_send: 'Send', cta_whatsapp: 'Message us on WhatsApp',
    all_rights: 'All rights reserved'
  },
  pt: {
    nav_home: 'Início', nav_services: 'Serviços', nav_about: 'Sobre', nav_contact: 'Contato',
    hero_title: 'Tábuas gourmet elegantes e deliciosas',
    hero_sub: 'Criamos tábuas de queijos e charcutaria personalizadas para cada ocasião. Envios para toda a Costa Rica.',
    cta_services: 'Ver serviços',
    about_title: 'Sobre nós',
    about_text: 'Somos especializados em tábuas de queijos e charcutaria personalizadas conforme a necessidade de cada cliente. Usamos produtos premium para garantir frescor e qualidade em cada tábua.',
    services_title: 'Serviços',
    svc_variety_title: 'Tábuas para cada evento',
    svc_variety_text: 'Mini tábuas para eventos corporativos, reuniões pequenas, aniversários e presentes personalizados.',
    svc_pairing_title: 'Harmonização',
    svc_pairing_text: 'Sugerimos a harmonização ideal para sua tábua: charcutaria + vinho.',
    svc_shipping_title: 'Envios',
    svc_shipping_text: 'Envios para toda a Costa Rica. Entrega rápida no GAM.',
    svc_custom_title: 'Personalização',
    svc_custom_text: 'Tábuas personalizadas conforme seu gosto e ocasião.',
    contact_title: 'Contato',
    contact_email_label: 'Email:',
    contact_phone_label: 'Telefone:',
    contact_help: 'Campos marcados com * são obrigatórios.',
    field_name: 'Nome *', field_email: 'Email *', field_message: 'Mensagem *',
    cta_send: 'Enviar', cta_whatsapp: 'Fale conosco no WhatsApp',
    all_rights: 'Todos os direitos reservados'
  }
};

function applyI18n(lang){
  const dict = messages[lang] || messages.es;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key]) el.textContent = dict[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded',()=>{
  const saved = localStorage.getItem('lang') || 'es';
  const select = document.getElementById('lang');
  select.value = saved;
  applyI18n(saved);
  select.addEventListener('change', e=> applyI18n(e.target.value));
});
