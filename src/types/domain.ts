export type DomainId = number;
type DomainDomain = string;
type DomainMain = boolean;
type DomainCreatedAt = string;
type DomainUpdatedAt = string;

export type Domain = {
  id: DomainId;
  domain: DomainDomain;
  main: DomainMain;
  created_at: DomainCreatedAt;
  updated_at: DomainUpdatedAt;
};

// <id type="integer">3</id>
//   <domain>some-domain.ru</domain>
//   <created-at type="timestamp">2017-01-01 03:00:00 +0300</created-at>
// <updated-at type="timestamp">2017-01-01 03:00:00 +0300</updated-at>
// <main type="boolean">true</main>
