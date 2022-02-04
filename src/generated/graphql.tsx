import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
  /** Safe string custom scalar type that does not allow xss attacks */
  SafeString: any;
};

export type AangemeldeCursusDeelname = {
  __typename?: 'AangemeldeCursusDeelname';
  Begintijd: Scalars['String'];
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  Eindtijd: Scalars['String'];
  IsDigitaalAanbod: Scalars['Boolean'];
  Locatie: Scalars['String'];
  Prijs: Scalars['Float'];
  Status: Scalars['String'];
  Titel: Scalars['String'];
};

export type Beoordeling = {
  __typename?: 'Beoordeling';
  Beoordelaar?: Maybe<Persoon>;
  BeoordelingID: Scalars['Int'];
  DatumGepland?: Maybe<Scalars['Date']>;
  DatumRapport?: Maybe<Scalars['Date']>;
  PersoonID?: Maybe<Scalars['Int']>;
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer?: Maybe<Scalars['Int']>;
  Status?: Maybe<BeoordelingStatusEnum>;
  VakID: Scalars['Int'];
};

export enum BeoordelingStatusEnum {
  Afgekeurd = 'Afgekeurd',
  Goedgekeurd = 'Goedgekeurd',
  TerBeoordeling = 'TerBeoordeling'
}

export type Certificaat = {
  __typename?: 'Certificaat';
  CertificaatID: Scalars['Int'];
  Code: Scalars['String'];
  Naam: Scalars['String'];
};

export type Certificering = {
  __typename?: 'Certificering';
  BeginDatum: Scalars['Date'];
  Certificaat?: Maybe<Certificaat>;
  CertificaatID: Scalars['Int'];
  CertificeringID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumIngetrokkenTot?: Maybe<Scalars['Date']>;
  DatumIngetrokkenVan?: Maybe<Scalars['Date']>;
  /** Datum waarop alle verplichte bijeenkomsten zijn gevolgd */
  DatumVoldaan?: Maybe<Scalars['Date']>;
  EindDatum: Scalars['Date'];
  IsVerlengingVan?: Maybe<Scalars['Int']>;
  NormVersieID: Scalars['Int'];
  Nummer: Scalars['String'];
  NummerWeergave: Scalars['String'];
  Opmerkingen: Scalars['String'];
  Passen?: Maybe<Array<Maybe<Pas>>>;
  PersoonID: Scalars['Int'];
  Status: CertificeringStatusEnum;
  UitstelTot?: Maybe<Scalars['Date']>;
  UitstelVerleend?: Maybe<Scalars['Boolean']>;
};

export enum CertificeringStatusEnum {
  DiplomaAfgekeurd = 'DiplomaAfgekeurd',
  Geldig = 'Geldig',
  Ingenomen = 'Ingenomen',
  Ingetrokken = 'Ingetrokken',
  TerGoedkeuring = 'TerGoedkeuring',
  Verlopen = 'Verlopen'
}

export type Competentie = {
  __typename?: 'Competentie';
  Code: Scalars['String'];
  CompetentieID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Contactgegevens = {
  __typename?: 'Contactgegevens';
  Adresregel1: Scalars['String'];
  Adresregel2?: Maybe<Scalars['String']>;
  ContactgegevensID: Scalars['Int'];
  Email?: Maybe<Scalars['String']>;
  EmailWerkgever?: Maybe<Scalars['String']>;
  Fax?: Maybe<Scalars['String']>;
  Huisnummer: Scalars['String'];
  HuisnummerToevoeging?: Maybe<Scalars['String']>;
  Land: Scalars['String'];
  Postcode: Scalars['String'];
  RekeningNummer?: Maybe<Scalars['String']>;
  Telefoon?: Maybe<Scalars['String']>;
  TerAttentieVan?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Woonplaats: Scalars['String'];
};

export type CreateCourseInput = {
  Begintijd: Scalars['Date'];
  Datum: Scalars['Date'];
  Docent?: InputMaybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  IsBesloten: Scalars['Boolean'];
  LocatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type CreateInvoiceCollectionInput = {
  invoiceIds?: InputMaybe<Array<Scalars['Int']>>;
};

export type CreateInvoiceCollectionResult = {
  __typename?: 'CreateInvoiceCollectionResult';
  invoiceCollectionId?: Maybe<Scalars['Int']>;
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export enum CrediteurTypeEnum {
  Persoon = 'persoon',
  Universiteit = 'universiteit'
}

export type Cursus = {
  __typename?: 'Cursus';
  /**  Only available when sub query is available  */
  AantalCursusDeelnames?: Maybe<Scalars['Int']>;
  AocKenmerk?: Maybe<Scalars['String']>;
  CursusCode?: Maybe<Scalars['String']>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  CursusID: Scalars['Int'];
  CursusleiderID?: Maybe<Scalars['Int']>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  /**  Only available when sub query is available  */
  EersteSessieDatum?: Maybe<Scalars['Date']>;
  ExamenCursusID?: Maybe<Scalars['Int']>;
  IsBesloten?: Maybe<Scalars['Boolean']>;
  /**  Only available when sub query is available  */
  LocatiePlaats?: Maybe<Scalars['String']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  Prijs?: Maybe<Scalars['Float']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Sessies?: Maybe<Array<Maybe<Sessie>>>;
  Status?: Maybe<Scalars['String']>;
  /**  Only available when sub query is available  */
  StudieresultaatStatus?: Maybe<StudieresultaatStatusEnum>;
  Titel?: Maybe<Scalars['String']>;
  Vak: Vak;
  VakID?: Maybe<Scalars['Int']>;
};

export type CursusDeelname = {
  __typename?: 'CursusDeelname';
  Certificering?: Maybe<Certificering>;
  CertificeringID?: Maybe<Scalars['Int']>;
  Cursus: Cursus;
  CursusDeelnameID: Scalars['Int'];
  CursusID: Scalars['Int'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  Opmerkingen?: Maybe<Scalars['String']>;
  Persoon?: Maybe<Persoon>;
  PersoonID: Scalars['Int'];
  Status: Scalars['String'];
};

export enum CursusDeelnameStatusEnum {
  Aangemeld = 'Aangemeld',
  Aanwezig = 'Aanwezig',
  Afgemeld = 'Afgemeld',
  Afgewezen = 'Afgewezen',
  Betaald = 'Betaald',
  Geregistreerd = 'Geregistreerd',
  Geslaagd = 'Geslaagd',
  GeslaagdPraktijkGezaktTheorie = 'GeslaagdPraktijk_GezaktTheorie',
  GeslaagdTheorieGezaktPraktijk = 'GeslaagdTheorie_GezaktPraktijk',
  Gezakt = 'Gezakt',
  Voorlopig = 'Voorlopig'
}

export type CursusNodes = {
  __typename?: 'CursusNodes';
  nodes?: Maybe<Array<Maybe<Cursus>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type CursusSessie = {
  __typename?: 'CursusSessie';
  CanUnRegister: Scalars['Boolean'];
  Competence: Scalars['String'];
  CourseCode: Scalars['String'];
  CourseId: Scalars['Int'];
  Date: Scalars['Date'];
  Distance?: Maybe<Scalars['Int']>;
  EndTime: Scalars['String'];
  LocationAddress?: Maybe<LocationAddress>;
  LocationName: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  Price: Scalars['Float'];
  PromoText?: Maybe<Scalars['String']>;
  Registered: Scalars['Boolean'];
  RegisteredDate?: Maybe<Scalars['Date']>;
  SpecialtyId: Scalars['Int'];
  SpecialtyWebsite?: Maybe<Scalars['String']>;
  StartTime: Scalars['String'];
  Theme: Scalars['String'];
  Title: Scalars['String'];
};

export enum CursusStatusEnum {
  Betaald = 'Betaald',
  ExamenAangemeld = 'ExamenAangemeld',
  Goedgekeurd = 'Goedgekeurd',
  Voorlopig = 'Voorlopig'
}

export enum DebiteurTypeEnum {
  Exameninstelling = 'exameninstelling',
  Persoon = 'persoon',
  Universiteit = 'universiteit',
  Vakgroep = 'vakgroep'
}

export type DeleteExamInput = {
  CursusID?: InputMaybe<Scalars['Int']>;
};

export type Document = {
  __typename?: 'Document';
  DocumentID: Scalars['Int'];
  Locatie?: Maybe<Scalars['String']>;
  Naam?: Maybe<Scalars['String']>;
  Omschijving?: Maybe<Scalars['String']>;
};

export type Exam = {
  __typename?: 'Exam';
  Cursus?: Maybe<Cursus>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamSpecialty = {
  __typename?: 'ExamSpecialty';
  Vak?: Maybe<Vak>;
  Vaknorm?: Maybe<Vaknorm>;
};

export type ExamenInstelling = {
  __typename?: 'ExamenInstelling';
  ApiKey?: Maybe<Scalars['String']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  ExamenInstellingID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  WebserviceEnabled: Scalars['Boolean'];
};

export type ExamenInstellingLink = {
  __typename?: 'ExamenInstellingLink';
  Actief: Scalars['Boolean'];
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID: Scalars['Int'];
  ExaminatorID: Scalars['Int'];
  PersoonID: Scalars['Int'];
};

export enum ExamenTypeEnum {
  DigitaalExamen = 'DigitaalExamen',
  PapierenExamen = 'PapierenExamen'
}

export type ExamenVersie = {
  __typename?: 'ExamenVersie';
  Documenten?: Maybe<Array<Maybe<ExamenVersieDocument>>>;
  EindDatum?: Maybe<Scalars['Date']>;
  ExamenOmschrijving: Scalars['String'];
  ExamenType: Scalars['String'];
  ExamenVersieCode: Scalars['String'];
  ExamenVersieID: Scalars['Int'];
  StartDatum?: Maybe<Scalars['Date']>;
};

export type ExamenVersieDocument = {
  __typename?: 'ExamenVersieDocument';
  AangemaaktDatum?: Maybe<Scalars['Date']>;
  AangemaaktDoor?: Maybe<Scalars['String']>;
  Document: Document;
  DocumentID: Scalars['Int'];
  ExamenVersieDocumentID: Scalars['Int'];
  ExamenVersieID: Scalars['Int'];
};

export enum FactuurHistorieStatusEnum {
  Aangemaakt = 'Aangemaakt',
  Betaald = 'Betaald',
  Creditfactuur = 'Creditfactuur',
  DoorBeAfgehandeld = 'Door_BE_Afgehandeld',
  Oninbaar = 'Oninbaar',
  OnjuistAangemaakt = 'OnjuistAangemaakt'
}

export type FactuurNodes = {
  __typename?: 'FactuurNodes';
  nodes?: Maybe<Array<Maybe<Invoice>>>;
  pageInfo?: Maybe<PageInfo>;
  totalCount: Scalars['Int'];
};

export type FilterInvoicesInput = {
  CrediteurID?: InputMaybe<Scalars['Int']>;
  CrediteurType?: InputMaybe<Scalars['String']>;
  CursusCode?: InputMaybe<Scalars['SafeString']>;
  DebiteurID?: InputMaybe<Scalars['Int']>;
  DebiteurType?: InputMaybe<DebiteurTypeEnum>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  FactuurNummer?: InputMaybe<Scalars['SafeString']>;
  ForReviewersOnly?: InputMaybe<Scalars['Boolean']>;
  FromDate?: InputMaybe<Scalars['Date']>;
  InvoiceCollectionFilter?: InputMaybe<InvoiceCollectionsFilterEnum>;
  InvoiceStatusFilterList?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  PaymentStatus?: InputMaybe<PaymentStatusEnum>;
  ToDate?: InputMaybe<Scalars['Date']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type Invoice = {
  __typename?: 'Invoice';
  BedragExBtw: Scalars['Float'];
  BedragIncBtw: Scalars['Float'];
  BtwBedrag: Scalars['Float'];
  CreditFactuurID?: Maybe<Scalars['Int']>;
  CreditFactuurNummer?: Maybe<Scalars['String']>;
  CreditInvoiceLink?: Maybe<Scalars['String']>;
  CrediteurID: Scalars['Int'];
  CrediteurType: Scalars['String'];
  CursusCode: Scalars['String'];
  DebiteurID: Scalars['Int'];
  DebiteurNaam: Scalars['String'];
  DebiteurType: DebiteurTypeEnum;
  FactuurDatum: Scalars['Date'];
  FactuurID: Scalars['Int'];
  FactuurJaar: Scalars['String'];
  FactuurNummer: Scalars['String'];
  FactuurStatus: Scalars['String'];
  InVerzamelfactuur: Scalars['Int'];
  InvoiceLink: Scalars['String'];
  IsBetaald: Scalars['Boolean'];
  IsCreditFactuur?: Maybe<Scalars['Boolean']>;
  Kenmerk?: Maybe<Scalars['String']>;
  KenmerkJaarFactuurNummer: Scalars['String'];
  OrigineleFactuurID?: Maybe<Scalars['Int']>;
  OrigineleFactuurNummer?: Maybe<Scalars['String']>;
  OrigineleInvoiceLink?: Maybe<Scalars['String']>;
  ProductCode: Scalars['String'];
  ProductNaam: Scalars['String'];
  StatusOpmerkingen?: Maybe<Scalars['String']>;
  VerzamelFactuurBTWBedrag: Scalars['Float'];
  VerzamelFactuurBedrag: Scalars['Float'];
  VerzamelFactuurDatum?: Maybe<Scalars['Date']>;
  VerzamelFactuurDatumBetaald?: Maybe<Scalars['Date']>;
  VerzamelFactuurID: Scalars['Int'];
  VerzamelFactuurIsBetaald: Scalars['Boolean'];
  VerzamelFactuurOpmerking?: Maybe<Scalars['String']>;
};

export enum InvoiceCollectionsFilterEnum {
  Both = 'BOTH',
  InvoiceCollections = 'INVOICE_COLLECTIONS',
  NormalInvoices = 'NORMAL_INVOICES'
}

export type Kennisgebied = {
  __typename?: 'Kennisgebied';
  KennisgebiedID: Scalars['Int'];
  Naam: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type Landen = {
  __typename?: 'Landen';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type Locatie = {
  __typename?: 'Locatie';
  Contactgegevens: Contactgegevens;
  ContactgegevensID?: Maybe<Scalars['Int']>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LocatieID: Scalars['Int'];
  Naam: Scalars['String'];
  Routebeschrijving: Scalars['String'];
  VakgroepID?: Maybe<Scalars['Int']>;
};

export type LocationAddress = {
  __typename?: 'LocationAddress';
  City?: Maybe<Scalars['String']>;
  Email?: Maybe<Scalars['String']>;
  HouseNr: Scalars['String'];
  HouseNrExtension?: Maybe<Scalars['String']>;
  Street: Scalars['String'];
  Website?: Maybe<Scalars['String']>;
  Zipcode?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCourse?: Maybe<Cursus>;
  createInvoiceCollection: CreateInvoiceCollectionResult;
  deleteExam?: Maybe<Scalars['Boolean']>;
  exportCards: ExportCardsResult;
  saveExam?: Maybe<Cursus>;
  /** Create or update a location */
  saveLocation: Locatie;
  startCertificeringenVerlengingProces: CertificeringVerlengingResult;
  updateInvoiceStatus: UpdateInvoiceStatusResult;
};


export type MutationCreateCourseArgs = {
  input: CreateCourseInput;
};


export type MutationCreateInvoiceCollectionArgs = {
  input: CreateInvoiceCollectionInput;
};


export type MutationDeleteExamArgs = {
  input: DeleteExamInput;
};


export type MutationExportCardsArgs = {
  sendToBatchMailer?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSaveExamArgs = {
  input: SaveExamInput;
};


export type MutationSaveLocationArgs = {
  input: SaveLocationInput;
};


export type MutationStartCertificeringenVerlengingProcesArgs = {
  sendToBatchMailer?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateInvoiceStatusArgs = {
  input: UpdateInvoiceStatusInput;
};

export type My = {
  __typename?: 'My';
  AangemeldeCursusDeelnames?: Maybe<Array<Maybe<AangemeldeCursusDeelname>>>;
  /**
   * Fetches only current licenses when 'alleenGeldig' is true.
   * When false (default), fetches all licenses.
   * 'perDatum' sets the date that the licenses should be valid (default today)
   */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  CursusDeelnames?: Maybe<Array<Maybe<CursusDeelname>>>;
  /** Link to exameninstelling(en), via Examinator table */
  ExamenInstellingLinks?: Maybe<Array<Maybe<ExamenInstellingLink>>>;
  Persoon: Persoon;
  Roles?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Link to vakgroep(en), via Hoogleraar table */
  VakgroepLinks?: Maybe<Array<Maybe<VakgroepLink>>>;
};


export type MyCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  inclusiefPassen?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};


export type MyCursusDeelnamesArgs = {
  certificeringId?: InputMaybe<Scalars['Int']>;
};


export type MyExamenInstellingLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};


export type MyVakgroepLinksArgs = {
  activeOnly?: InputMaybe<Scalars['Boolean']>;
};

export type Nationaliteit = {
  __typename?: 'Nationaliteit';
  Text: Scalars['String'];
  Value: Scalars['String'];
};

export type NormVersie = {
  __typename?: 'NormVersie';
  BeginDatum?: Maybe<Scalars['Date']>;
  Definitief?: Maybe<Scalars['Boolean']>;
  EindDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Opmerkingen?: Maybe<Scalars['String']>;
  UniversiteitID?: Maybe<Scalars['Int']>;
  Versienummer?: Maybe<Scalars['String']>;
};

export type OrderByArgs = {
  field: Scalars['String'];
  sortDirection: SortDirectionEnum;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Pas = {
  __typename?: 'Pas';
  Aantal: Scalars['Int'];
  BriefVerstuurd: Scalars['Boolean'];
  CertificeringID: Scalars['Int'];
  ContactgegevensID?: Maybe<Scalars['Int']>;
  DatumAanvraag: Scalars['Date'];
  DatumUitgeleverd?: Maybe<Scalars['Date']>;
  Geadresseerde?: Maybe<Scalars['String']>;
  PasID: Scalars['Int'];
  PasRetouren?: Maybe<Array<Maybe<PasRetour>>>;
  Status: Scalars['String'];
};

export type PasRetour = {
  __typename?: 'PasRetour';
  AangemaaktDoor: Scalars['String'];
  DatumAangemaakt: Scalars['Date'];
  DatumRetour: Scalars['Date'];
  PasID: Scalars['Int'];
  PasRetourID: Scalars['Int'];
};

export enum PasStatusEnum {
  Aangevraagd = 'Aangevraagd',
  Betaald = 'Betaald',
  Error = 'Error',
  UitTeLeveren = 'UitTeLeveren',
  Uitgeleverd = 'Uitgeleverd'
}

export enum PaymentStatusEnum {
  All = 'ALL',
  NotPaid = 'NOT_PAID',
  Paid = 'PAID'
}

export type Persoon = {
  __typename?: 'Persoon';
  Achternaam: Scalars['String'];
  Actief?: Maybe<Scalars['Boolean']>;
  BSN?: Maybe<Scalars['Int']>;
  /** Fetches all licenses */
  Certificeringen?: Maybe<Array<Maybe<Certificering>>>;
  /** Gets the contact data */
  Contactgegevens: Contactgegevens;
  /** Name in format 'Voorletters [tussenvoegsel] Achternaam */
  FullName?: Maybe<Scalars['String']>;
  GbaNummer: Scalars['String'];
  GbaUpdate?: Maybe<Scalars['Date']>;
  Geboortedatum?: Maybe<Scalars['Date']>;
  Geslacht: Scalars['String'];
  IsGbaGeregistreerd?: Maybe<Scalars['Boolean']>;
  Nationaliteit: Scalars['String'];
  PersoonID: Scalars['Int'];
  Roepnaam: Scalars['String'];
  /** Name in format 'Achternaam, Voorletters [tussenvoegsel]' */
  SortableFullName?: Maybe<Scalars['String']>;
  Tussenvoegsel: Scalars['String'];
  Voorletters: Scalars['String'];
};


export type PersoonCertificeringenArgs = {
  alleenGeldig?: InputMaybe<Scalars['Boolean']>;
  perDatum?: InputMaybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  CursusSessies?: Maybe<Array<Maybe<CursusSessie>>>;
  ExamDetails?: Maybe<Exam>;
  ExamSpecialties?: Maybe<Array<Maybe<Vak>>>;
  ExamSpecialty?: Maybe<ExamSpecialty>;
  ExamVersionDocuments?: Maybe<ExamenVersie>;
  ExamenInstellingen: Array<Maybe<ExamenInstelling>>;
  Exams?: Maybe<CursusNodes>;
  Kennisgebieden: Array<Maybe<Kennisgebied>>;
  Landen: Array<Maybe<Landen>>;
  Nationaliteiten: Array<Maybe<Nationaliteit>>;
  PersoonZoeken?: Maybe<Persoon>;
  SearchExamOrganizers?: Maybe<Array<Maybe<SearchExamOrganizerResult>>>;
  SearchExamVersions?: Maybe<Array<Maybe<ExamenVersie>>>;
  SearchLocations?: Maybe<Array<Maybe<Locatie>>>;
  SearchOrganizers?: Maybe<Array<Maybe<SearchOrganizerResult>>>;
  Specialties?: Maybe<Array<Maybe<Vak>>>;
  Specialty?: Maybe<Vak>;
  Studieresultaten: Array<Maybe<Studieresultaat>>;
  Themas: Array<Maybe<Thema>>;
  Vakgroepen: Array<Maybe<Vakgroep>>;
  getStudyProgressByLicenseId: StudyProgress;
  getStudyProgressByPersonId: Array<StudyProgress>;
  invoices: FactuurNodes;
  /** Fetches data of the current logged in person */
  my?: Maybe<My>;
};


export type QueryCursusSessiesArgs = {
  input: SearchCourseSessionsInput;
};


export type QueryExamDetailsArgs = {
  input: SearchExamInput;
};


export type QueryExamSpecialtiesArgs = {
  input: ExamSpecialtiesInput;
};


export type QueryExamSpecialtyArgs = {
  vakId: Scalars['Int'];
};


export type QueryExamVersionDocumentsArgs = {
  input: ExamVersionDocumentsInput;
};


export type QueryExamenInstellingenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};


export type QueryExamsArgs = {
  input: ExamsInput;
};


export type QueryPersoonZoekenArgs = {
  Achternaam?: InputMaybe<Scalars['SafeString']>;
  Geboortedatum?: InputMaybe<Scalars['Date']>;
  PersoonID?: InputMaybe<Scalars['Int']>;
};


export type QuerySearchExamVersionsArgs = {
  input: SearchExamVersionsInput;
};


export type QuerySearchLocationsArgs = {
  input: SearchLocationsInput;
};


export type QuerySpecialtiesArgs = {
  input: SpecialtiesInput;
};


export type QuerySpecialtyArgs = {
  fullDetails?: InputMaybe<Scalars['Boolean']>;
  vakId: Scalars['Int'];
};


export type QueryStudieresultatenArgs = {
  PersoonID: Scalars['Int'];
};


export type QueryVakgroepenArgs = {
  findById?: InputMaybe<Scalars['Int']>;
  isActive?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetStudyProgressByLicenseIdArgs = {
  certificeringId: Scalars['Int'];
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
  studyResultsMustBePaid?: InputMaybe<Scalars['Boolean']>;
};


export type QueryGetStudyProgressByPersonIdArgs = {
  personId: Scalars['Int'];
  skipParticipationDetails?: InputMaybe<Scalars['Boolean']>;
  studyResultsMustBePaid?: InputMaybe<Scalars['Boolean']>;
};


export type QueryInvoicesArgs = {
  filterInvoices?: InputMaybe<FilterInvoicesInput>;
  orderBy?: InputMaybe<OrderByArgs>;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
};

export type SaveExamInput = {
  Begintijd: Scalars['Date'];
  CursusID?: InputMaybe<Scalars['Int']>;
  Datum: Scalars['Date'];
  Docent?: InputMaybe<Scalars['SafeString']>;
  Eindtijd: Scalars['Date'];
  ExamenType: ExamenTypeEnum;
  ExamenVersieID: Scalars['Int'];
  IsBesloten?: InputMaybe<Scalars['Boolean']>;
  LocatieID: Scalars['Int'];
  MaximumCursisten: Scalars['Int'];
  Opmerkingen?: InputMaybe<Scalars['SafeString']>;
  Prijs: Scalars['Float'];
  Promotietekst: Scalars['SafeString'];
  SessieID?: InputMaybe<Scalars['Int']>;
  Titel: Scalars['SafeString'];
  VakID: Scalars['Int'];
};

export type SearchExamOrganizerResult = {
  __typename?: 'SearchExamOrganizerResult';
  ExamenInstellingID: Scalars['Int'];
  Naam?: Maybe<Scalars['String']>;
};

export type SearchOrganizerResult = {
  __typename?: 'SearchOrganizerResult';
  Naam?: Maybe<Scalars['String']>;
  VakgroepID: Scalars['Int'];
};

export type SearchSpecialtyResult = {
  __typename?: 'SearchSpecialtyResult';
  Code: Scalars['String'];
  Competence: Scalars['String'];
  Organizer: Scalars['String'];
  OrganizerEmail?: Maybe<Scalars['String']>;
  OrganizerPhone?: Maybe<Scalars['String']>;
  OrganizerWebsite?: Maybe<Scalars['String']>;
  Price: Scalars['Float'];
  PromoText?: Maybe<Scalars['String']>;
  SpecialtyId: Scalars['Int'];
  Theme: Scalars['String'];
  Title: Scalars['String'];
};

export type Sessie = {
  __typename?: 'Sessie';
  Begintijd: Scalars['Date'];
  CursusID: Scalars['Int'];
  Datum: Scalars['Date'];
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DatumBegintijd: Scalars['Date'];
  DatumEindtijd: Scalars['Date'];
  DatumGewijzigd?: Maybe<Scalars['Date']>;
  DigitaalExamenId?: Maybe<Scalars['Int']>;
  Docent: Scalars['String'];
  Eindtijd: Scalars['Date'];
  ExamenVersie?: Maybe<ExamenVersie>;
  ExamenVersieID?: Maybe<Scalars['Int']>;
  Locatie?: Maybe<Locatie>;
  LocatieID: Scalars['Int'];
  LocatieToevoeging: Scalars['String'];
  Opmerkingen: Scalars['String'];
  PersoonIDAangemaakt?: Maybe<Scalars['Int']>;
  PersoonIDGewijzigd?: Maybe<Scalars['Int']>;
  SessieID: Scalars['Int'];
  SessieType: Scalars['String'];
};

export enum SortDirectionEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Studieresultaat = {
  __typename?: 'Studieresultaat';
  Certificering?: Maybe<Certificering>;
  Cursus: Cursus;
  Datum: Scalars['Date'];
  NormVersie: NormVersie;
  Persoon: Persoon;
  Status: StudieresultaatStatusEnum;
  StudieresultaatID: Scalars['Int'];
  Vak: Vak;
};

export enum StudieresultaatStatusEnum {
  Betaald = 'Betaald',
  Definitief = 'Definitief',
  Fictief = 'Fictief',
  Voorlopig = 'Voorlopig'
}

export type StudyProgress = {
  __typename?: 'StudyProgress';
  Certificering: Certificering;
  Completed: Scalars['Boolean'];
  NewCertificateId?: Maybe<Scalars['Int']>;
  NewCertificateName?: Maybe<Scalars['String']>;
  Studieresultaten?: Maybe<Array<Maybe<Studieresultaat>>>;
};

export type Thema = {
  __typename?: 'Thema';
  Code: Scalars['String'];
  Naam: Scalars['String'];
  ThemaID: Scalars['Int'];
  UniversiteitID?: Maybe<Scalars['Int']>;
};

export type UpdateInvoiceStatusInput = {
  actionDate: Scalars['Date'];
  invoiceId: Scalars['Int'];
  isInvoiceCollection: Scalars['Boolean'];
  remarks?: InputMaybe<Scalars['SafeString']>;
  status: FactuurHistorieStatusEnum;
};

export type UpdateInvoiceStatusResult = {
  __typename?: 'UpdateInvoiceStatusResult';
  message?: Maybe<Scalars['String']>;
  success: Scalars['Boolean'];
};

export type Vaardigheid = {
  __typename?: 'Vaardigheid';
  Code: Scalars['String'];
  Omschrijving: Scalars['String'];
  UniversiteitID?: Maybe<Scalars['Int']>;
  VaardigheidID: Scalars['Int'];
};

export type Vak = {
  __typename?: 'Vak';
  Afkorting?: Maybe<Scalars['String']>;
  BeoordelaarNaam?: Maybe<Scalars['String']>;
  Beoordelingen?: Maybe<Array<Maybe<Beoordeling>>>;
  Code?: Maybe<Scalars['String']>;
  CompetentieID?: Maybe<Scalars['Int']>;
  CompetentieNaam?: Maybe<Scalars['String']>;
  Competenties?: Maybe<Array<Maybe<Competentie>>>;
  DatumAangemaakt?: Maybe<Scalars['Date']>;
  DigitaalAanbod?: Maybe<Scalars['Boolean']>;
  Docenten?: Maybe<Scalars['String']>;
  Doelgroep?: Maybe<Scalars['String']>;
  Doelstelling?: Maybe<Scalars['String']>;
  EvaluatieWijze?: Maybe<Scalars['String']>;
  ExamenInstelling?: Maybe<ExamenInstelling>;
  ExamenInstellingID?: Maybe<Scalars['Int']>;
  GewijzigdDatum?: Maybe<Scalars['Date']>;
  Inhoud?: Maybe<Scalars['String']>;
  IsExamenVak?: Maybe<Scalars['Boolean']>;
  Kosten?: Maybe<Scalars['Float']>;
  MaximumCursisten?: Maybe<Scalars['Int']>;
  MaximumDatum?: Maybe<Scalars['Date']>;
  MinimumDatum?: Maybe<Scalars['Date']>;
  NormVersieID: Scalars['Int'];
  Praktijk?: Maybe<Scalars['String']>;
  Promotietekst?: Maybe<Scalars['String']>;
  Samenhang?: Maybe<Scalars['String']>;
  Samenvatting?: Maybe<Scalars['String']>;
  Status?: Maybe<VakStatusEnum>;
  ThemaID?: Maybe<Scalars['Int']>;
  ThemaNaam?: Maybe<Scalars['String']>;
  Themas?: Maybe<Array<Maybe<Thema>>>;
  Tijdsduur?: Maybe<Scalars['String']>;
  Titel?: Maybe<Scalars['String']>;
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VakID: Scalars['Int'];
  VakKennisgebieden?: Maybe<Array<Maybe<Kennisgebied>>>;
  VakVaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID?: Maybe<Scalars['Int']>;
  Vernieuwend?: Maybe<Scalars['String']>;
  Website?: Maybe<Scalars['String']>;
  Werkvorm?: Maybe<Scalars['String']>;
};

export enum VakStatusEnum {
  Afgekeurd = 'Afgekeurd',
  Goedgekeurd = 'Goedgekeurd',
  InOntwerp = 'InOntwerp',
  Ingediend = 'Ingediend',
  Ingetrokken = 'Ingetrokken',
  Voorlopig = 'Voorlopig',
  WordtBeoordeeld = 'WordtBeoordeeld'
}

export type Vakgroep = {
  __typename?: 'Vakgroep';
  ApiKey?: Maybe<Scalars['String']>;
  Code: Scalars['String'];
  Contactgegevens: Contactgegevens;
  ContactgegevensID: Scalars['Int'];
  IsActief: Scalars['Boolean'];
  IsBtwPlichtig: Scalars['Boolean'];
  Naam: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VakgroepID: Scalars['Int'];
  WebserviceEnabled: Scalars['Boolean'];
};

export type VakgroepLink = {
  __typename?: 'VakgroepLink';
  Actief: Scalars['Boolean'];
  HoogleraarID: Scalars['Int'];
  PersoonID: Scalars['Int'];
  Vakgroep?: Maybe<Vakgroep>;
  VakgroepID: Scalars['Int'];
};

export type Vaknorm = {
  __typename?: 'Vaknorm';
  CompetentieID: Scalars['Int'];
  MinimumPunten: Scalars['Int'];
  NormVersieID: Scalars['Int'];
  ThemaID: Scalars['Int'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VaknormID: Scalars['Int'];
};

export type VaknormVaardigheid = {
  __typename?: 'VaknormVaardigheid';
  IsVerplicht: Scalars['Boolean'];
  Punten: Scalars['Int'];
  Vaardigheden?: Maybe<Array<Maybe<Vaardigheid>>>;
  VaardigheidID: Scalars['Int'];
  VaknormID: Scalars['Int'];
  VaknormVaardigheid: Scalars['Int'];
};

export type Visitatie = {
  __typename?: 'Visitatie';
  DatumRapport?: Maybe<Scalars['Date']>;
  DatumVisitatie?: Maybe<Scalars['Date']>;
  PersoonID: Scalars['Int'];
  Rapport?: Maybe<Scalars['String']>;
  RapportCijfer: Scalars['Int'];
  SessieID: Scalars['Int'];
  Status: VisitatieStatusEnum;
  VisitatieID: Scalars['Int'];
  VolgensIntentieAanbod: Scalars['Boolean'];
};

export enum VisitatieStatusEnum {
  Ingediend = 'INGEDIEND',
  Ingepland = 'INGEPLAND'
}

export type Vooropleiding = {
  __typename?: 'Vooropleiding';
  Categorie: VooropleidingCategorie;
  Certificaten?: Maybe<Array<Maybe<Certificaat>>>;
  Code: Scalars['String'];
  IsActief: Scalars['Boolean'];
  Naam: Scalars['String'];
  Omschrijving: Scalars['String'];
  UniversiteitID: Scalars['Int'];
  VooropleidingCategorieID: Scalars['Int'];
  VooropleidingID: Scalars['Int'];
};

export type VooropleidingCategorie = {
  __typename?: 'VooropleidingCategorie';
  Naam: Scalars['String'];
  VooropleidingCategorieID: Scalars['Int'];
};

export type CertificeringVerlengingResult = {
  __typename?: 'certificeringVerlengingResult';
  result: Scalars['String'];
};

export type ContactgegevensInput = {
  Adresregel1: Scalars['SafeString'];
  Email?: InputMaybe<Scalars['SafeString']>;
  Huisnummer: Scalars['SafeString'];
  HuisnummerToevoeging?: InputMaybe<Scalars['SafeString']>;
  Land: Scalars['SafeString'];
  Postcode: Scalars['SafeString'];
  Telefoon?: InputMaybe<Scalars['SafeString']>;
  Website?: InputMaybe<Scalars['SafeString']>;
  Woonplaats: Scalars['SafeString'];
};

export type ExamSpecialtiesInput = {
  examenInstellingId?: InputMaybe<Scalars['Int']>;
  validOnly?: InputMaybe<Scalars['Boolean']>;
};

export type ExamVersionDocumentsInput = {
  ExamenVersieID: Scalars['Int'];
};

export type ExamsInput = {
  examCode?: InputMaybe<Scalars['SafeString']>;
  from?: InputMaybe<Scalars['Date']>;
  locationId?: InputMaybe<Scalars['Int']>;
  orderBy: OrderByArgs;
  pageNumber: Scalars['Int'];
  pageSize: Scalars['Int'];
  title?: InputMaybe<Scalars['SafeString']>;
  to?: InputMaybe<Scalars['Date']>;
};

export type ExportCardsResult = {
  __typename?: 'exportCardsResult';
  fileName: Scalars['String'];
  result: Scalars['String'];
};

export type SaveLocationInput = {
  Contactgegevens?: InputMaybe<ContactgegevensInput>;
  ContactgegevensID?: InputMaybe<Scalars['Int']>;
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  IsActief: Scalars['Boolean'];
  LocatieID?: InputMaybe<Scalars['Int']>;
  Naam: Scalars['SafeString'];
  Routebeschrijving?: InputMaybe<Scalars['SafeString']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SearchCourseSessionsInput = {
  competenceId?: InputMaybe<Scalars['Int']>;
  currentCourseId?: InputMaybe<Scalars['Int']>;
  distanceRadius?: InputMaybe<Scalars['Int']>;
  from?: InputMaybe<Scalars['Date']>;
  isOnlineCourse: Scalars['Boolean'];
  knowledgeAreaId?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
  to?: InputMaybe<Scalars['Date']>;
  zipcodeNumbers?: InputMaybe<Scalars['Int']>;
};

export type SearchExamInput = {
  examId: Scalars['Int'];
};

export type SearchExamVersionsInput = {
  ExamDate?: InputMaybe<Scalars['Date']>;
  ExamType: ExamenTypeEnum;
  VakID?: InputMaybe<Scalars['Int']>;
};

export type SearchLocationsInput = {
  ExamenInstellingID?: InputMaybe<Scalars['Int']>;
  VakgroepID?: InputMaybe<Scalars['Int']>;
};

export type SearchSpecialtyInput = {
  competenceId?: InputMaybe<Scalars['Int']>;
  isOnlineCourse: Scalars['Boolean'];
  knowledgeAreaId?: InputMaybe<Scalars['Int']>;
  specialtyId?: InputMaybe<Scalars['Int']>;
  themeId?: InputMaybe<Scalars['Int']>;
};

export type SpecialtiesInput = {
  vakgroepId?: InputMaybe<Scalars['Int']>;
};

export type GetMyQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyQuery = { __typename?: 'Query', my?: { __typename?: 'My', Roles?: Array<string> } };

export type ExamDetailsQueryVariables = Exact<{
  examId: Scalars['Int'];
}>;


export type ExamDetailsQuery = { __typename?: 'Query', ExamDetails?: { __typename?: 'Exam', Cursus?: { __typename?: 'Cursus', CursusID: number, CursusCode?: string, Titel?: string, Promotietekst?: string, Sessies?: Array<{ __typename?: 'Sessie', Datum: any, Begintijd: any, Eindtijd: any, Locatie?: { __typename?: 'Locatie', Naam: string, Contactgegevens: { __typename?: 'Contactgegevens', Adresregel1: string, Adresregel2?: string, Huisnummer: string, HuisnummerToevoeging?: string, Postcode: string, Woonplaats: string } } }>, Vak: { __typename?: 'Vak', VakID: number, Inhoud?: string, Competenties?: Array<{ __typename?: 'Competentie', Naam: string }>, ExamenInstelling?: { __typename?: 'ExamenInstelling', ExamenInstellingID: number, Naam: string }, Vakgroep?: { __typename?: 'Vakgroep', VakgroepID: number, Naam: string } } }, Vaknorm?: { __typename?: 'Vaknorm', VaknormID: number, Vaardigheden?: Array<{ __typename?: 'Vaardigheid', VaardigheidID: number, Code: string, Omschrijving: string }> } } };

export type ExamSpecialtiesQueryVariables = Exact<{
  input: ExamSpecialtiesInput;
}>;


export type ExamSpecialtiesQuery = { __typename?: 'Query', ExamSpecialties?: Array<{ __typename?: 'Vak', VakID: number, Titel?: string, MinimumDatum?: any, MaximumDatum?: any }> };

export type ExamSpecialtyQueryVariables = Exact<{
  vakId: Scalars['Int'];
}>;


export type ExamSpecialtyQuery = { __typename?: 'Query', ExamSpecialty?: { __typename?: 'ExamSpecialty', Vak?: { __typename?: 'Vak', VakID: number, Titel?: string, Inhoud?: string, Promotietekst?: string, Doelgroep?: string, Doelstelling?: string, Competenties?: Array<{ __typename?: 'Competentie', Naam: string }> }, Vaknorm?: { __typename?: 'Vaknorm', Vaardigheden?: Array<{ __typename?: 'Vaardigheid', VaardigheidID: number, Code: string, Omschrijving: string }> } } };

export type SearchPersonQueryVariables = Exact<{
  Achternaam?: InputMaybe<Scalars['SafeString']>;
  Geboortedatum?: InputMaybe<Scalars['Date']>;
  PersoonID?: InputMaybe<Scalars['Int']>;
}>;


export type SearchPersonQuery = { __typename?: 'Query', PersoonZoeken?: { __typename?: 'Persoon', PersoonID: number, Achternaam: string, Geboortedatum?: any } };

export type StudyResultsQueryVariables = Exact<{
  PersoonID: Scalars['Int'];
}>;


export type StudyResultsQuery = { __typename?: 'Query', Studieresultaten: Array<{ __typename?: 'Studieresultaat', StudieresultaatID: number, Persoon: { __typename?: 'Persoon', Achternaam: string }, Certificering?: { __typename?: 'Certificering', BeginDatum: any, EindDatum: any, Certificaat?: { __typename?: 'Certificaat', Naam: string } }, Cursus: { __typename?: 'Cursus', Titel?: string, Sessies?: Array<{ __typename?: 'Sessie', Datum: any }> }, Vak: { __typename?: 'Vak', ExamenInstelling?: { __typename?: 'ExamenInstelling', Naam: string } } }> };


export const GetMyDocument = gql`
    query getMy {
  my {
    Roles
  }
}
    `;

/**
 * __useGetMyQuery__
 *
 * To run a query within a React component, call `useGetMyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyQuery(baseOptions?: Apollo.QueryHookOptions<GetMyQuery, GetMyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, options);
      }
export function useGetMyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyQuery, GetMyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyQuery, GetMyQueryVariables>(GetMyDocument, options);
        }
export type GetMyQueryHookResult = ReturnType<typeof useGetMyQuery>;
export type GetMyLazyQueryHookResult = ReturnType<typeof useGetMyLazyQuery>;
export type GetMyQueryResult = Apollo.QueryResult<GetMyQuery, GetMyQueryVariables>;
export const ExamDetailsDocument = gql`
    query ExamDetails($examId: Int!) {
  ExamDetails(input: {examId: $examId}) {
    Cursus {
      CursusID
      CursusCode
      Titel
      Promotietekst
      Sessies {
        Datum
        Begintijd
        Eindtijd
        Locatie {
          Naam
          Contactgegevens {
            Adresregel1
            Adresregel2
            Huisnummer
            HuisnummerToevoeging
            Postcode
            Woonplaats
          }
        }
      }
      Vak {
        VakID
        Competenties {
          Naam
        }
        Inhoud
        ExamenInstelling {
          ExamenInstellingID
          Naam
        }
        Vakgroep {
          VakgroepID
          Naam
        }
      }
    }
    Vaknorm {
      VaknormID
      Vaardigheden {
        VaardigheidID
        Code
        Omschrijving
      }
    }
  }
}
    `;

/**
 * __useExamDetailsQuery__
 *
 * To run a query within a React component, call `useExamDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamDetailsQuery({
 *   variables: {
 *      examId: // value for 'examId'
 *   },
 * });
 */
export function useExamDetailsQuery(baseOptions: Apollo.QueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, options);
      }
export function useExamDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamDetailsQuery, ExamDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamDetailsQuery, ExamDetailsQueryVariables>(ExamDetailsDocument, options);
        }
export type ExamDetailsQueryHookResult = ReturnType<typeof useExamDetailsQuery>;
export type ExamDetailsLazyQueryHookResult = ReturnType<typeof useExamDetailsLazyQuery>;
export type ExamDetailsQueryResult = Apollo.QueryResult<ExamDetailsQuery, ExamDetailsQueryVariables>;
export const ExamSpecialtiesDocument = gql`
    query ExamSpecialties($input: examSpecialtiesInput!) {
  ExamSpecialties(input: $input) {
    VakID
    Titel
    MinimumDatum
    MaximumDatum
  }
}
    `;

/**
 * __useExamSpecialtiesQuery__
 *
 * To run a query within a React component, call `useExamSpecialtiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamSpecialtiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamSpecialtiesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useExamSpecialtiesQuery(baseOptions: Apollo.QueryHookOptions<ExamSpecialtiesQuery, ExamSpecialtiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamSpecialtiesQuery, ExamSpecialtiesQueryVariables>(ExamSpecialtiesDocument, options);
      }
export function useExamSpecialtiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamSpecialtiesQuery, ExamSpecialtiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamSpecialtiesQuery, ExamSpecialtiesQueryVariables>(ExamSpecialtiesDocument, options);
        }
export type ExamSpecialtiesQueryHookResult = ReturnType<typeof useExamSpecialtiesQuery>;
export type ExamSpecialtiesLazyQueryHookResult = ReturnType<typeof useExamSpecialtiesLazyQuery>;
export type ExamSpecialtiesQueryResult = Apollo.QueryResult<ExamSpecialtiesQuery, ExamSpecialtiesQueryVariables>;
export const ExamSpecialtyDocument = gql`
    query ExamSpecialty($vakId: Int!) {
  ExamSpecialty(vakId: $vakId) {
    Vak {
      VakID
      Titel
      Competenties {
        Naam
      }
      Inhoud
      Promotietekst
      Doelgroep
      Doelstelling
    }
    Vaknorm {
      Vaardigheden {
        VaardigheidID
        Code
        Omschrijving
      }
    }
  }
}
    `;

/**
 * __useExamSpecialtyQuery__
 *
 * To run a query within a React component, call `useExamSpecialtyQuery` and pass it any options that fit your needs.
 * When your component renders, `useExamSpecialtyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExamSpecialtyQuery({
 *   variables: {
 *      vakId: // value for 'vakId'
 *   },
 * });
 */
export function useExamSpecialtyQuery(baseOptions: Apollo.QueryHookOptions<ExamSpecialtyQuery, ExamSpecialtyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExamSpecialtyQuery, ExamSpecialtyQueryVariables>(ExamSpecialtyDocument, options);
      }
export function useExamSpecialtyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExamSpecialtyQuery, ExamSpecialtyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExamSpecialtyQuery, ExamSpecialtyQueryVariables>(ExamSpecialtyDocument, options);
        }
export type ExamSpecialtyQueryHookResult = ReturnType<typeof useExamSpecialtyQuery>;
export type ExamSpecialtyLazyQueryHookResult = ReturnType<typeof useExamSpecialtyLazyQuery>;
export type ExamSpecialtyQueryResult = Apollo.QueryResult<ExamSpecialtyQuery, ExamSpecialtyQueryVariables>;
export const SearchPersonDocument = gql`
    query SearchPerson($Achternaam: SafeString, $Geboortedatum: Date, $PersoonID: Int) {
  PersoonZoeken(
    Achternaam: $Achternaam
    Geboortedatum: $Geboortedatum
    PersoonID: $PersoonID
  ) {
    PersoonID
    Achternaam
    Geboortedatum
  }
}
    `;

/**
 * __useSearchPersonQuery__
 *
 * To run a query within a React component, call `useSearchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchPersonQuery({
 *   variables: {
 *      Achternaam: // value for 'Achternaam'
 *      Geboortedatum: // value for 'Geboortedatum'
 *      PersoonID: // value for 'PersoonID'
 *   },
 * });
 */
export function useSearchPersonQuery(baseOptions?: Apollo.QueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
      }
export function useSearchPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchPersonQuery, SearchPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchPersonQuery, SearchPersonQueryVariables>(SearchPersonDocument, options);
        }
export type SearchPersonQueryHookResult = ReturnType<typeof useSearchPersonQuery>;
export type SearchPersonLazyQueryHookResult = ReturnType<typeof useSearchPersonLazyQuery>;
export type SearchPersonQueryResult = Apollo.QueryResult<SearchPersonQuery, SearchPersonQueryVariables>;
export const StudyResultsDocument = gql`
    query StudyResults($PersoonID: Int!) {
  Studieresultaten(PersoonID: $PersoonID) {
    StudieresultaatID
    Persoon {
      Achternaam
    }
    Certificering {
      Certificaat {
        Naam
      }
      BeginDatum
      EindDatum
    }
    Cursus {
      Titel
      Sessies {
        Datum
      }
    }
    Vak {
      ExamenInstelling {
        Naam
      }
    }
  }
}
    `;

/**
 * __useStudyResultsQuery__
 *
 * To run a query within a React component, call `useStudyResultsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudyResultsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudyResultsQuery({
 *   variables: {
 *      PersoonID: // value for 'PersoonID'
 *   },
 * });
 */
export function useStudyResultsQuery(baseOptions: Apollo.QueryHookOptions<StudyResultsQuery, StudyResultsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudyResultsQuery, StudyResultsQueryVariables>(StudyResultsDocument, options);
      }
export function useStudyResultsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudyResultsQuery, StudyResultsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudyResultsQuery, StudyResultsQueryVariables>(StudyResultsDocument, options);
        }
export type StudyResultsQueryHookResult = ReturnType<typeof useStudyResultsQuery>;
export type StudyResultsLazyQueryHookResult = ReturnType<typeof useStudyResultsLazyQuery>;
export type StudyResultsQueryResult = Apollo.QueryResult<StudyResultsQuery, StudyResultsQueryVariables>;