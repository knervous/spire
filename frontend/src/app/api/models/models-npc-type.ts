/* tslint:disable */
/* eslint-disable */
/**
 * Spire
 * Spire API documentation
 *
 * The version of the OpenAPI document: 3.0
 * Contact: akkadius1@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ModelsAlternateCurrency } from './models-alternate-currency';
import { ModelsLoottable } from './models-loottable';
import { ModelsMerchantlist } from './models-merchantlist';
import { ModelsNpcEmote } from './models-npc-emote';
import { ModelsNpcFaction } from './models-npc-faction';
import { ModelsNpcSpell } from './models-npc-spell';
import { ModelsNpcTypesTint } from './models-npc-types-tint';
import { ModelsSpawnentry } from './models-spawnentry';

/**
 * 
 * @export
 * @interface ModelsNpcType
 */
export interface ModelsNpcType {
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    _int?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    ac?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    accuracy?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    adventure_template_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    aggroradius?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    agi?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    alt_currency_id?: number;
    /**
     * 
     * @type {ModelsAlternateCurrency}
     * @memberof ModelsNpcType
     */
    alternate_currency?: ModelsAlternateCurrency;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    always_aggro?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsNpcType
     */
    ammo_idfile?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    armortint_blue?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    armortint_green?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    armortint_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    armortint_red?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    armtexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    assistradius?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    atk?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    attack_count?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    attack_delay?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    attack_speed?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    avoidance?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    bodytype?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    bracertexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    cha?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_ac?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_accuracy_rating?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_atk?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_attack_delay?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_avoidance_rating?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_max_dmg?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    charm_min_dmg?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    _class?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    corrup?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    cr?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    d_melee_texture_1?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    d_melee_texture_2?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    dex?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    dr?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    drakkin_details?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    drakkin_heritage?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    drakkin_tattoo?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    emoteid?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    exclude?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    exp_mod?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    face?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    faction_amount?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    feettexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    findable?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    fixed?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    flymode?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    fr?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    gender?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    handtexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    healscale?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    helmtexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    herosforgemodel?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    hp?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    hp_regen_per_second?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    hp_regen_rate?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    ignore_despawn?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    isbot?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    isquest?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsNpcType
     */
    lastname?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    legtexture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    level?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    light?: number;
    /**
     * 
     * @type {ModelsLoottable}
     * @memberof ModelsNpcType
     */
    loottable?: ModelsLoottable;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    loottable_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_beard?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_beardcolor?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_eyecolor?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_eyecolor_2?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_haircolor?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    luclin_hairstyle?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    mana?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    mana_regen_rate?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    maxdmg?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    maxlevel?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    merchant_id?: number;
    /**
     * 
     * @type {Array<ModelsMerchantlist>}
     * @memberof ModelsNpcType
     */
    merchantlists?: Array<ModelsMerchantlist>;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    mindmg?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    model?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    mr?: number;
    /**
     * 
     * @type {string}
     * @memberof ModelsNpcType
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    no_target_hotkey?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    npc_aggro?: number;
    /**
     * 
     * @type {Array<ModelsNpcEmote>}
     * @memberof ModelsNpcType
     */
    npc_emotes?: Array<ModelsNpcEmote>;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    npc_faction_id?: number;
    /**
     * 
     * @type {Array<ModelsNpcFaction>}
     * @memberof ModelsNpcType
     */
    npc_factions?: Array<ModelsNpcFaction>;
    /**
     * 
     * @type {ModelsNpcSpell}
     * @memberof ModelsNpcType
     */
    npc_spell?: ModelsNpcSpell;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    npc_spells_effects_id?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    npc_spells_id?: number;
    /**
     * 
     * @type {ModelsNpcTypesTint}
     * @memberof ModelsNpcType
     */
    npc_types_tint?: ModelsNpcTypesTint;
    /**
     * 
     * @type {string}
     * @memberof ModelsNpcType
     */
    npcspecialattks?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    peqid?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    ph_r?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    pr?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    prim_melee_type?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    private_corpse?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    qglobal?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    race?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    raid_target?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    ranged_type?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    rare_spawn?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    runspeed?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    scalerate?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    sec_melee_type?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    see_hide?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    see_improved_hide?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    see_invis?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    see_invis_undead?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    show_name?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    size?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    skip_global_loot?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    slow_mitigation?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    spawn_limit?: number;
    /**
     * 
     * @type {Array<ModelsSpawnentry>}
     * @memberof ModelsNpcType
     */
    spawnentries?: Array<ModelsSpawnentry>;
    /**
     * 
     * @type {string}
     * @memberof ModelsNpcType
     */
    special_abilities?: string;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    spellscale?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    sta?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    str?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    stuck_behavior?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    texture?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    trackable?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    trap_template?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    underwater?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    unique_?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    unique_spawn_by_name?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    untargetable?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    version?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    walkspeed?: number;
    /**
     * 
     * @type {number}
     * @memberof ModelsNpcType
     */
    wis?: number;
}


