type IJsonCampus_users = {
	id: number,
	user_id: number,
	campus_id: number,
	is_primary: boolean,
	created_at: string,
	updated_at: string,
  }
  
  type IJsonCampusLanguage = {
	id: number,
	name: string,
	identifier: string,
	created_at: string,
	updated_at: string,
  }
  
  type IJsonCampus = {
	id: number,
	name: string,
	time_zone: string,
	language: IJsonCampusLanguage[],
	users_count: number,
	vogsphere_id: number,
	country: string,
	address: string,
	zip: string,
	city: string,
	website: string,
	facebook: string,
	twitter: string,
	active: boolean,
	public: boolean,
	email_extension: string,
	default_hidden_phone: boolean,
  }
  
  type IJsonExpertises_users = {
	  id: number,
	  expertise_id: number,
	  interested: boolean,
	  value: number,
	  contact_me: boolean,
	  created_at: string,
	  user_id: number,
  }
  
  type IJsonTitles_users = {
	  id: number,
	  user_id: number,
	  title_id: number,
	  selected: boolean,
	  created_at: string,
	  updated_at: string,
  }
  
  type IJsonTitles = {
	  id: number,
	  name: string,
  }
  
  type IJsonAchievements = {
	  id: number,
	  name: string,
	  tier: string,
	  kind: string,
	  visible: boolean,
	  image: string,
	  nbr_of_success: null,
	  users_url: string,
  }
  
  type IJsonLanguages_users = {
	  id: number,
	  language_id: number,
	  user_id: number,
	  position: number,
	  created_at: string,
  }
  
  type IProjects_usersProject = {
	  id: number,
	  name: string,
	  slug: string,
	  parent_id: null | number,
  }
  
  type IProjects_users = {
	  id: number,
	  occurrence: number, 
	  final_mark: number,
	  status: string,
	  'validated?': boolean,
	  current_team_id: number,
	  project: IProjects_usersProject,
	  cursus_ids: number[],
	  marked_at: string,
	  marked: boolean,
	  retriable_at: string,
	  created_at: string,
	  updated_at: string,
  }
  
  type ICursus_usersCursus = {
	  id: number,
	  created_at :string,
	  name: string,
	  slug: string,
	  kind: string,
  }
  
  type ICursus_usersUserImageVersion = {
	  large: string,
	  medium: string,
	  small: string,
	  micro: string,
  }
  
  type ICursus_usersUserImage = {
	  link: string,
	  versions: ICursus_usersUserImageVersion,
  }
  
  type ICursus_usersUser = {
	  id: number,
	  email: string,
	  login: string,
	  first_name: string,
	  last_name: string,
	  usual_full_name: string,
	  usual_first_name: null | string,
	  url: string,
	  phone: string,
	  displayname: string,
	  kind: string,
	  image: ICursus_usersUserImage,
	  'staff?': boolean,
	  correction_point: number,
	  pool_month: string,
	  pool_year: string | number,
	  location: null | string,
	  wallet: number,
	  anonymize_date: string, 
	  data_erasure_date: string,
	  created_at: string,
	  updated_at: string,
	  alumnized_at: null,
	  'alumni?': boolean,
	  'active?': boolean,
  }
  
  type ICursus_usersSkills = {
	  id: number,
	  name: string,
	  level: number,
  }
  
  type ICursus_users = {
	  grade: null | string | number,
	  level: number,
	  skills: ICursus_usersSkills[],
	  blackholed_at: null | string | number,
	  id : number,
	  begin_at: string,
	  end_at: string,
	  cursus_id: number,
	  has_coalition: boolean,
	  created_at: string,
	  updated_at: string,
	  user: ICursus_usersUser,
	  cursus: ICursus_usersCursus,
  }
  
  type IImageVersion = {
	  large: string,
	  medium: string,
	  small: string,
	  micro: string,
  }
  
  type IImage = {
	  link: string,
	  versions: IImageVersion,
  }
  
  type IJson = {
	id: number,
	email: string,
	login: string,
	first_name: string,
	last_name: string,
	usual_full_name: string,
	usual_first_name: string | null,
	url: string,
	phone: string | number,
	displayname: string,
	kind: string,
	image: IImage,
	'staff?': boolean,
	correction_point: number,
	pool_month: string,
	pool_year: string | number,
	location: string | null,
	wallet: number,
	anonymize_date: string,
	data_erasure_date: string,
	created_at: string,
	updated_at: string,
	alumnized_at: null,
	'alumni?': boolean,
	'active?': boolean,
	groups: any[],
	cursus_users: ICursus_users[],
	projects_users: IProjects_users[],
	languages_users: IJsonLanguages_users[],
	achievements: IJsonAchievements[],
	titles: IJsonTitles[],
	titles_users: IJsonTitles_users[],
	partnerships: any[],
	patroned: any[],
	patroning: any[],
	expertises_users: IJsonExpertises_users:[],
	roles: any[],
	campus: IJsonCampus[],
	campus_users: IJsonCampus_users[],
  }