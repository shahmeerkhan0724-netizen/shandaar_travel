// Unsplash photos. Swap IDs here if any image fails; components fall back to a navy gradient.
export const img = (id, w = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`
export const IMAGES = {
  hero: 'photo-1436491865332-7a61a109cc05',
  about: 'photo-1488646953014-85cb44e25828',
  dubai: 'photo-1512453979798-5ea266f8880c',
  turkey: 'photo-1524231757912-21f4fe3a7200',
  swiss: 'photo-1531366936337-7c912a4589a7',
  uk: 'photo-1513635269975-59663e0ac1ad',
  europe: 'photo-1467269204594-9661b134dd2b',
  holiday: 'photo-1507525428034-b723cf961d3e',
}
