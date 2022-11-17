SET check_function_bodies = false;
CREATE TABLE public.seller_company (
    id integer NOT NULL,
    name text,
    about_company text,
    verified boolean,
    owner integer,
    licence_number integer,
    address text
);
CREATE FUNCTION public.seller_company_for_user(company public.seller_company, hasura_session json) RETURNS SETOF public.seller_company
    LANGUAGE sql STABLE
    AS $$
    SELECT *
    FROM seller_company
    WHERE company.owner = CAST((hasura_session ->> 'x-hasura-user-id') AS INTEGER)
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public.buyer (
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    id integer NOT NULL,
    v_code_for_reg text,
    v_code_for_forg text,
    expire_time timestamp with time zone,
    status boolean,
    address text
);
CREATE SEQUENCE public.buyer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.buyer_id_seq OWNED BY public.buyer.id;
CREATE TABLE public.cart (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    buyer_id integer,
    p_id integer
);
CREATE SEQUENCE public.cart_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.cart_id_seq OWNED BY public.cart.id;
CREATE TABLE public.category (
    id integer NOT NULL,
    name text NOT NULL
);
CREATE SEQUENCE public.category_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.category_id_seq OWNED BY public.category.id;
CREATE TABLE public.deliver_agent (
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    address text NOT NULL,
    v_code_for_reg text NOT NULL,
    v_code_for_forg text NOT NULL,
    status boolean NOT NULL,
    expire_time_for_v_code timestamp with time zone NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.deliver_agent_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.deliver_agent_id_seq OWNED BY public.deliver_agent.id;
CREATE TABLE public.in_travel (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    d_id integer,
    o_id integer
);
CREATE SEQUENCE public.in_travel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.in_travel_id_seq OWNED BY public.in_travel.id;
CREATE TABLE public."order" (
    id integer NOT NULL,
    updated_at timestamp with time zone DEFAULT now(),
    created_at timestamp with time zone DEFAULT now(),
    buyer_id integer,
    p_id integer,
    active boolean
);
CREATE SEQUENCE public.order_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.order_id_seq OWNED BY public."order".id;
CREATE TABLE public.p_options (
    id integer NOT NULL,
    name text,
    difference text,
    p_id integer,
    price real,
    image_url text
);
CREATE SEQUENCE public.p_options_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.p_options_id_seq OWNED BY public.p_options.id;
CREATE TABLE public.product (
    id integer NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now(),
    about_product text,
    category_id integer,
    owner integer,
    sub_category_id integer,
    name text,
    option_id integer
);
CREATE SEQUENCE public.product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.product_id_seq OWNED BY public.product.id;
CREATE TABLE public.seller (
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    v_code_for_reg text,
    v_code_for_for text,
    expire_time timestamp with time zone,
    status boolean,
    id integer NOT NULL,
    address text,
    company integer,
    have_company boolean DEFAULT false
);
CREATE SEQUENCE public.seller_company_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.seller_company_id_seq OWNED BY public.seller_company.id;
CREATE SEQUENCE public.seller_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.seller_id_seq OWNED BY public.seller.id;
CREATE TABLE public.sub_category (
    name text NOT NULL,
    c_id integer NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.sub_category_id_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.sub_category_id_id_seq OWNED BY public.sub_category.id;
CREATE TABLE public.supper_admin (
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    v_code_for_forg text NOT NULL,
    id integer NOT NULL
);
CREATE SEQUENCE public.supper_admin_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.supper_admin_id_seq OWNED BY public.supper_admin.id;
CREATE TABLE public.wishlist (
    id integer NOT NULL,
    p_id integer,
    buyer_id integer
);
CREATE SEQUENCE public.wishlist_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.wishlist_id_seq OWNED BY public.wishlist.id;
ALTER TABLE ONLY public.buyer ALTER COLUMN id SET DEFAULT nextval('public.buyer_id_seq'::regclass);
ALTER TABLE ONLY public.cart ALTER COLUMN id SET DEFAULT nextval('public.cart_id_seq'::regclass);
ALTER TABLE ONLY public.category ALTER COLUMN id SET DEFAULT nextval('public.category_id_seq'::regclass);
ALTER TABLE ONLY public.deliver_agent ALTER COLUMN id SET DEFAULT nextval('public.deliver_agent_id_seq'::regclass);
ALTER TABLE ONLY public.in_travel ALTER COLUMN id SET DEFAULT nextval('public.in_travel_id_seq'::regclass);
ALTER TABLE ONLY public."order" ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
ALTER TABLE ONLY public.p_options ALTER COLUMN id SET DEFAULT nextval('public.p_options_id_seq'::regclass);
ALTER TABLE ONLY public.product ALTER COLUMN id SET DEFAULT nextval('public.product_id_seq'::regclass);
ALTER TABLE ONLY public.seller ALTER COLUMN id SET DEFAULT nextval('public.seller_id_seq'::regclass);
ALTER TABLE ONLY public.seller_company ALTER COLUMN id SET DEFAULT nextval('public.seller_company_id_seq'::regclass);
ALTER TABLE ONLY public.sub_category ALTER COLUMN id SET DEFAULT nextval('public.sub_category_id_id_seq'::regclass);
ALTER TABLE ONLY public.supper_admin ALTER COLUMN id SET DEFAULT nextval('public.supper_admin_id_seq'::regclass);
ALTER TABLE ONLY public.wishlist ALTER COLUMN id SET DEFAULT nextval('public.wishlist_id_seq'::regclass);
ALTER TABLE ONLY public.buyer
    ADD CONSTRAINT buyer_email_key UNIQUE (email);
ALTER TABLE ONLY public.buyer
    ADD CONSTRAINT buyer_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.deliver_agent
    ADD CONSTRAINT deliver_agent_email_key UNIQUE (email);
ALTER TABLE ONLY public.deliver_agent
    ADD CONSTRAINT deliver_agent_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.in_travel
    ADD CONSTRAINT in_travel_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.p_options
    ADD CONSTRAINT p_options_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.seller_company
    ADD CONSTRAINT seller_company_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.seller
    ADD CONSTRAINT seller_email_key UNIQUE (email);
ALTER TABLE ONLY public.seller
    ADD CONSTRAINT seller_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_id_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.supper_admin
    ADD CONSTRAINT supper_admin_email_key UNIQUE (email);
ALTER TABLE ONLY public.supper_admin
    ADD CONSTRAINT supper_admin_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.wishlist
    ADD CONSTRAINT wishlist_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_order_updated_at BEFORE UPDATE ON public."order" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_order_updated_at ON public."order" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_product_updated_at BEFORE UPDATE ON public.product FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_product_updated_at ON public.product IS 'trigger to set value of column "updated_at" to current timestamp on row update';
ALTER TABLE ONLY public.in_travel
    ADD CONSTRAINT in_travel_d_id_fkey FOREIGN KEY (d_id) REFERENCES public.deliver_agent(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.in_travel
    ADD CONSTRAINT in_travel_o_id_fkey FOREIGN KEY (o_id) REFERENCES public."order"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_buyer_id_fkey FOREIGN KEY (buyer_id) REFERENCES public.buyer(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_p_id_fkey FOREIGN KEY (p_id) REFERENCES public.product(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.p_options
    ADD CONSTRAINT p_options_p_id_fkey FOREIGN KEY (p_id) REFERENCES public.product(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_option_id_fkey FOREIGN KEY (option_id) REFERENCES public.p_options(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_owner_fkey FOREIGN KEY (owner) REFERENCES public.seller(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.seller
    ADD CONSTRAINT seller_company_fkey FOREIGN KEY (company) REFERENCES public.seller_company(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.seller_company
    ADD CONSTRAINT seller_company_owner_fkey FOREIGN KEY (owner) REFERENCES public.seller(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.sub_category
    ADD CONSTRAINT sub_category_id_c_id_fkey FOREIGN KEY (c_id) REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
