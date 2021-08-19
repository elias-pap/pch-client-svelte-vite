const ENTRY_NAMES = {
  ixp: 'IXP',
  city: 'City',
  country: 'Country',
  protocol: 'Protocol',
  number_of_peers: 'Number of peers',
  number_of_rib_entries: 'Number of RIB entries',
  rs_local_asn: 'Local ASN',
  total_number_of_neighbors: 'Number of Neighbors',
  updated_at: 'Updated',
};

export const ENTRY_NAMES_EMPTY = {
  ixp: '',
  city: '',
  country: '',
  protocol: '',
  number_of_peers: '',
  number_of_rib_entries: '',
  rs_local_asn: '',
  total_number_of_neighbors: '',
  updated_at: '',
};

/**
 * Creates a key for the given main table entry,
 * by concatenating its primary fields.
 * @param {*} entry The given main table entry
 * @returns The created key
 */
export const createUniqueEntryKey = (entry) => {
  return entry.ixp + entry.city + entry.country + entry.protocol;
};

export const getEntryKeys = () => {
  return Object.keys(ENTRY_NAMES);
};

export const getEntryKeyNamePairs = () => {
  return Object.entries(ENTRY_NAMES);
};
