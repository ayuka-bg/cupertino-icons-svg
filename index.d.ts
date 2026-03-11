/** Cupertino Icons (SF Symbols–style) as SVG URLs. */

/** Snake-case icon keys used in the manifest (e.g. `"airplane"`, `"heart_fill"`). */
export type IconName =
  "airplane" |
  "alarm" |
  "alarm_fill" |
  "alt" |
  "ant" |
  "ant_circle" |
  "ant_circle_fill" |
  "ant_fill" |
  "antenna_radiowaves_left_right" |
  "app" |
  "app_badge" |
  "app_badge_fill" |
  "app_fill" |
  "archivebox" |
  "archivebox_fill" |
  "arrow_branch" |
  "arrow_clockwise" |
  "arrow_clockwise_circle" |
  "arrow_clockwise_circle_fill" |
  "arrow_counterclockwise" |
  "arrow_counterclockwise_circle" |
  "arrow_counterclockwise_circle_fill" |
  "arrow_down" |
  "arrow_down_circle" |
  "arrow_down_circle_fill" |
  "arrow_down_doc" |
  "arrow_down_doc_fill" |
  "arrow_down_left" |
  "arrow_down_left_circle" |
  "arrow_down_left_circle_fill" |
  "arrow_down_left_square" |
  "arrow_down_left_square_fill" |
  "arrow_down_right" |
  "arrow_down_right_arrow_up_left" |
  "arrow_down_right_circle" |
  "arrow_down_right_circle_fill" |
  "arrow_down_right_square" |
  "arrow_down_right_square_fill" |
  "arrow_down_square" |
  "arrow_down_square_fill" |
  "arrow_down_to_line" |
  "arrow_down_to_line_alt" |
  "arrow_left" |
  "arrow_left_circle" |
  "arrow_left_circle_fill" |
  "arrow_left_right" |
  "arrow_left_right_circle" |
  "arrow_left_right_circle_fill" |
  "arrow_left_right_square" |
  "arrow_left_right_square_fill" |
  "arrow_left_square" |
  "arrow_left_square_fill" |
  "arrow_left_to_line" |
  "arrow_left_to_line_alt" |
  "arrow_merge" |
  "arrow_right" |
  "arrow_right_arrow_left" |
  "arrow_right_arrow_left_circle" |
  "arrow_right_arrow_left_circle_fill" |
  "arrow_right_arrow_left_square" |
  "arrow_right_arrow_left_square_fill" |
  "arrow_right_circle" |
  "arrow_right_circle_fill" |
  "arrow_right_square" |
  "arrow_right_square_fill" |
  "arrow_right_to_line" |
  "arrow_right_to_line_alt" |
  "arrow_swap" |
  "arrow_turn_down_left" |
  "arrow_turn_down_right" |
  "arrow_turn_left_down" |
  "arrow_turn_left_up" |
  "arrow_turn_right_down" |
  "arrow_turn_right_up" |
  "arrow_turn_up_left" |
  "arrow_turn_up_right" |
  "arrow_up" |
  "arrow_up_arrow_down" |
  "arrow_up_arrow_down_circle" |
  "arrow_up_arrow_down_circle_fill" |
  "arrow_up_arrow_down_square" |
  "arrow_up_arrow_down_square_fill" |
  "arrow_up_bin" |
  "arrow_up_bin_fill" |
  "arrow_up_circle" |
  "arrow_up_circle_fill" |
  "arrow_up_doc" |
  "arrow_up_doc_fill" |
  "arrow_up_down" |
  "arrow_up_down_circle" |
  "arrow_up_down_circle_fill" |
  "arrow_up_down_square" |
  "arrow_up_down_square_fill" |
  "arrow_up_left" |
  "arrow_up_left_arrow_down_right" |
  "arrow_up_left_circle" |
  "arrow_up_left_circle_fill" |
  "arrow_up_left_square" |
  "arrow_up_left_square_fill" |
  "arrow_up_right" |
  "arrow_up_right_circle" |
  "arrow_up_right_circle_fill" |
  "arrow_up_right_diamond" |
  "arrow_up_right_diamond_fill" |
  "arrow_up_right_square" |
  "arrow_up_right_square_fill" |
  "arrow_up_square" |
  "arrow_up_square_fill" |
  "arrow_up_to_line" |
  "arrow_up_to_line_alt" |
  "arrow_uturn_down" |
  "arrow_uturn_down_circle" |
  "arrow_uturn_down_circle_fill" |
  "arrow_uturn_down_square" |
  "arrow_uturn_down_square_fill" |
  "arrow_uturn_left" |
  "arrow_uturn_left_circle" |
  "arrow_uturn_left_circle_fill" |
  "arrow_uturn_left_square" |
  "arrow_uturn_left_square_fill" |
  "arrow_uturn_right" |
  "arrow_uturn_right_circle" |
  "arrow_uturn_right_circle_fill" |
  "arrow_uturn_right_square" |
  "arrow_uturn_right_square_fill" |
  "arrow_uturn_up" |
  "arrow_uturn_up_circle" |
  "arrow_uturn_up_circle_fill" |
  "arrow_uturn_up_square" |
  "arrow_uturn_up_square_fill" |
  "arrowshape_turn_up_left" |
  "arrowshape_turn_up_left_2" |
  "arrowshape_turn_up_left_2_fill" |
  "arrowshape_turn_up_left_circle" |
  "arrowshape_turn_up_left_circle_fill" |
  "arrowshape_turn_up_left_fill" |
  "arrowshape_turn_up_right" |
  "arrowshape_turn_up_right_circle" |
  "arrowshape_turn_up_right_circle_fill" |
  "arrowshape_turn_up_right_fill" |
  "arrowtriangle_down" |
  "arrowtriangle_down_circle" |
  "arrowtriangle_down_circle_fill" |
  "arrowtriangle_down_fill" |
  "arrowtriangle_down_square" |
  "arrowtriangle_down_square_fill" |
  "arrowtriangle_left" |
  "arrowtriangle_left_circle" |
  "arrowtriangle_left_circle_fill" |
  "arrowtriangle_left_fill" |
  "arrowtriangle_left_square" |
  "arrowtriangle_left_square_fill" |
  "arrowtriangle_right" |
  "arrowtriangle_right_circle" |
  "arrowtriangle_right_circle_fill" |
  "arrowtriangle_right_fill" |
  "arrowtriangle_right_square" |
  "arrowtriangle_right_square_fill" |
  "arrowtriangle_up" |
  "arrowtriangle_up_circle" |
  "arrowtriangle_up_circle_fill" |
  "arrowtriangle_up_fill" |
  "arrowtriangle_up_square" |
  "arrowtriangle_up_square_fill" |
  "asterisk_circle" |
  "asterisk_circle_fill" |
  "at" |
  "at_badge_minus" |
  "at_badge_plus" |
  "at_circle" |
  "at_circle_fill" |
  "backward" |
  "backward_end" |
  "backward_end_alt" |
  "backward_end_alt_fill" |
  "backward_end_fill" |
  "backward_fill" |
  "badge_plus_radiowaves_right" |
  "bag" |
  "bag_badge_minus" |
  "bag_badge_plus" |
  "bag_fill" |
  "bag_fill_badge_minus" |
  "bag_fill_badge_plus" |
  "bandage" |
  "bandage_fill" |
  "barcode" |
  "barcode_viewfinder" |
  "bars" |
  "bed_double" |
  "bed_double_fill" |
  "bell" |
  "bell_circle" |
  "bell_circle_fill" |
  "bell_fill" |
  "bell_slash" |
  "bell_slash_fill" |
  "bin_xmark" |
  "bin_xmark_fill" |
  "bitcoin" |
  "bitcoin_circle" |
  "bitcoin_circle_fill" |
  "bluetooth" |
  "bold" |
  "bold_italic_underline" |
  "bold_underline" |
  "bolt" |
  "bolt_badge_a" |
  "bolt_badge_a_fill" |
  "bolt_circle" |
  "bolt_circle_fill" |
  "bolt_fill" |
  "bolt_horizontal" |
  "bolt_horizontal_circle" |
  "bolt_horizontal_circle_fill" |
  "bolt_horizontal_fill" |
  "bolt_slash" |
  "bolt_slash_fill" |
  "book" |
  "book_circle" |
  "book_circle_fill" |
  "book_fill" |
  "bookmark" |
  "bookmark_fill" |
  "briefcase" |
  "briefcase_fill" |
  "bubble_left" |
  "bubble_left_bubble_right" |
  "bubble_left_bubble_right_fill" |
  "bubble_left_fill" |
  "bubble_middle_bottom" |
  "bubble_middle_bottom_fill" |
  "bubble_middle_top" |
  "bubble_middle_top_fill" |
  "bubble_right" |
  "bubble_right_fill" |
  "burn" |
  "burst" |
  "burst_fill" |
  "bus" |
  "calendar" |
  "calendar_badge_minus" |
  "calendar_badge_plus" |
  "calendar_circle" |
  "calendar_circle_fill" |
  "calendar_today" |
  "camera" |
  "camera_circle" |
  "camera_circle_fill" |
  "camera_fill" |
  "camera_on_rectangle" |
  "camera_on_rectangle_fill" |
  "camera_rotate" |
  "camera_rotate_fill" |
  "camera_viewfinder" |
  "capslock" |
  "capslock_fill" |
  "capsule" |
  "capsule_fill" |
  "captions_bubble" |
  "captions_bubble_fill" |
  "car" |
  "car_detailed" |
  "car_fill" |
  "cart" |
  "cart_badge_minus" |
  "cart_badge_plus" |
  "cart_fill" |
  "cart_fill_badge_minus" |
  "cart_fill_badge_plus" |
  "chart_bar" |
  "chart_bar_alt_fill" |
  "chart_bar_circle" |
  "chart_bar_circle_fill" |
  "chart_bar_fill" |
  "chart_bar_square" |
  "chart_bar_square_fill" |
  "chart_pie" |
  "chart_pie_fill" |
  "chat_bubble" |
  "chat_bubble_2" |
  "chat_bubble_2_fill" |
  "chat_bubble_fill" |
  "chat_bubble_text" |
  "chat_bubble_text_fill" |
  "checkmark" |
  "checkmark_alt" |
  "checkmark_alt_circle" |
  "checkmark_alt_circle_fill" |
  "checkmark_circle" |
  "checkmark_circle_fill" |
  "checkmark_rectangle" |
  "checkmark_rectangle_fill" |
  "checkmark_seal" |
  "checkmark_seal_fill" |
  "checkmark_shield" |
  "checkmark_shield_fill" |
  "checkmark_square" |
  "checkmark_square_fill" |
  "chevron_back" |
  "chevron_compact_down" |
  "chevron_compact_left" |
  "chevron_compact_right" |
  "chevron_compact_up" |
  "chevron_down" |
  "chevron_down_circle" |
  "chevron_down_circle_fill" |
  "chevron_down_square" |
  "chevron_down_square_fill" |
  "chevron_forward" |
  "chevron_left" |
  "chevron_left_2" |
  "chevron_left_circle" |
  "chevron_left_circle_fill" |
  "chevron_left_slash_chevron_right" |
  "chevron_left_square" |
  "chevron_left_square_fill" |
  "chevron_right" |
  "chevron_right_2" |
  "chevron_right_circle" |
  "chevron_right_circle_fill" |
  "chevron_right_square" |
  "chevron_right_square_fill" |
  "chevron_up" |
  "chevron_up_chevron_down" |
  "chevron_up_circle" |
  "chevron_up_circle_fill" |
  "chevron_up_square" |
  "chevron_up_square_fill" |
  "circle" |
  "circle_bottomthird_split" |
  "circle_fill" |
  "circle_grid_3x3" |
  "circle_grid_3x3_fill" |
  "circle_grid_hex" |
  "circle_grid_hex_fill" |
  "circle_lefthalf_fill" |
  "circle_righthalf_fill" |
  "clear" |
  "clear_fill" |
  "clock" |
  "clock_fill" |
  "cloud" |
  "cloud_bolt" |
  "cloud_bolt_fill" |
  "cloud_bolt_rain" |
  "cloud_bolt_rain_fill" |
  "cloud_download" |
  "cloud_download_fill" |
  "cloud_drizzle" |
  "cloud_drizzle_fill" |
  "cloud_fill" |
  "cloud_fog" |
  "cloud_fog_fill" |
  "cloud_hail" |
  "cloud_hail_fill" |
  "cloud_heavyrain" |
  "cloud_heavyrain_fill" |
  "cloud_moon" |
  "cloud_moon_bolt" |
  "cloud_moon_bolt_fill" |
  "cloud_moon_fill" |
  "cloud_moon_rain" |
  "cloud_moon_rain_fill" |
  "cloud_rain" |
  "cloud_rain_fill" |
  "cloud_sleet" |
  "cloud_sleet_fill" |
  "cloud_snow" |
  "cloud_snow_fill" |
  "cloud_sun" |
  "cloud_sun_bolt" |
  "cloud_sun_bolt_fill" |
  "cloud_sun_fill" |
  "cloud_sun_rain" |
  "cloud_sun_rain_fill" |
  "cloud_upload" |
  "cloud_upload_fill" |
  "color_filter" |
  "color_filter_fill" |
  "command" |
  "compass" |
  "compass_fill" |
  "control" |
  "creditcard" |
  "creditcard_fill" |
  "crop" |
  "crop_rotate" |
  "cube" |
  "cube_box" |
  "cube_box_fill" |
  "cube_fill" |
  "cursor_rays" |
  "decrease_indent" |
  "decrease_quotelevel" |
  "delete_left" |
  "delete_left_fill" |
  "delete_right" |
  "delete_right_fill" |
  "desktopcomputer" |
  "device_desktop" |
  "device_laptop" |
  "device_phone_landscape" |
  "device_phone_portrait" |
  "dial" |
  "dial_fill" |
  "divide" |
  "divide_circle" |
  "divide_circle_fill" |
  "divide_square" |
  "divide_square_fill" |
  "doc" |
  "doc_append" |
  "doc_chart" |
  "doc_chart_fill" |
  "doc_checkmark" |
  "doc_checkmark_fill" |
  "doc_circle" |
  "doc_circle_fill" |
  "doc_fill" |
  "doc_on_clipboard" |
  "doc_on_clipboard_fill" |
  "doc_on_doc" |
  "doc_on_doc_fill" |
  "doc_person" |
  "doc_person_fill" |
  "doc_plaintext" |
  "doc_richtext" |
  "doc_text" |
  "doc_text_fill" |
  "doc_text_search" |
  "doc_text_viewfinder" |
  "dot_radiowaves_left_right" |
  "dot_radiowaves_right" |
  "dot_square" |
  "dot_square_fill" |
  "download_circle" |
  "download_circle_fill" |
  "drop" |
  "drop_fill" |
  "drop_triangle" |
  "drop_triangle_fill" |
  "ear" |
  "eject" |
  "eject_fill" |
  "ellipses_bubble" |
  "ellipses_bubble_fill" |
  "ellipsis" |
  "ellipsis_circle" |
  "ellipsis_circle_fill" |
  "ellipsis_vertical" |
  "ellipsis_vertical_circle" |
  "ellipsis_vertical_circle_fill" |
  "envelope" |
  "envelope_badge" |
  "envelope_badge_fill" |
  "envelope_circle" |
  "envelope_circle_fill" |
  "envelope_fill" |
  "envelope_open" |
  "envelope_open_fill" |
  "equal" |
  "equal_circle" |
  "equal_circle_fill" |
  "equal_square" |
  "equal_square_fill" |
  "escape" |
  "exclamationmark" |
  "exclamationmark_bubble" |
  "exclamationmark_bubble_fill" |
  "exclamationmark_circle" |
  "exclamationmark_circle_fill" |
  "exclamationmark_octagon" |
  "exclamationmark_octagon_fill" |
  "exclamationmark_shield" |
  "exclamationmark_shield_fill" |
  "exclamationmark_square" |
  "exclamationmark_square_fill" |
  "exclamationmark_triangle" |
  "exclamationmark_triangle_fill" |
  "eye" |
  "eye_fill" |
  "eye_slash" |
  "eye_slash_fill" |
  "eyedropper" |
  "eyedropper_full" |
  "eyedropper_halffull" |
  "eyeglasses" |
  "f_cursive" |
  "f_cursive_circle" |
  "f_cursive_circle_fill" |
  "film" |
  "film_fill" |
  "flag" |
  "flag_circle" |
  "flag_circle_fill" |
  "flag_fill" |
  "flag_slash" |
  "flag_slash_fill" |
  "flame" |
  "flame_fill" |
  "floppy_disk" |
  "flowchart" |
  "flowchart_fill" |
  "folder" |
  "folder_badge_minus" |
  "folder_badge_person_crop" |
  "folder_badge_plus" |
  "folder_circle" |
  "folder_circle_fill" |
  "folder_fill" |
  "folder_fill_badge_minus" |
  "folder_fill_badge_person_crop" |
  "folder_fill_badge_plus" |
  "forward" |
  "forward_end" |
  "forward_end_alt" |
  "forward_end_alt_fill" |
  "forward_end_fill" |
  "forward_fill" |
  "function" |
  "fx" |
  "gamecontroller" |
  "gamecontroller_alt_fill" |
  "gamecontroller_fill" |
  "gauge" |
  "gauge_badge_minus" |
  "gauge_badge_plus" |
  "gear" |
  "gear_alt" |
  "gear_alt_fill" |
  "gift" |
  "gift_alt" |
  "gift_alt_fill" |
  "gift_fill" |
  "globe" |
  "gobackward" |
  "gobackward_10" |
  "gobackward_15" |
  "gobackward_30" |
  "gobackward_45" |
  "gobackward_60" |
  "gobackward_75" |
  "gobackward_90" |
  "gobackward_minus" |
  "goforward" |
  "goforward_10" |
  "goforward_15" |
  "goforward_30" |
  "goforward_45" |
  "goforward_60" |
  "goforward_75" |
  "goforward_90" |
  "goforward_plus" |
  "graph_circle" |
  "graph_circle_fill" |
  "graph_square" |
  "graph_square_fill" |
  "greaterthan" |
  "greaterthan_circle" |
  "greaterthan_circle_fill" |
  "greaterthan_square" |
  "greaterthan_square_fill" |
  "grid" |
  "grid_circle" |
  "grid_circle_fill" |
  "guitars" |
  "hammer" |
  "hammer_fill" |
  "hand_draw" |
  "hand_draw_fill" |
  "hand_point_left" |
  "hand_point_left_fill" |
  "hand_point_right" |
  "hand_point_right_fill" |
  "hand_raised" |
  "hand_raised_fill" |
  "hand_raised_slash" |
  "hand_raised_slash_fill" |
  "hand_thumbsdown" |
  "hand_thumbsdown_fill" |
  "hand_thumbsup" |
  "hand_thumbsup_fill" |
  "hare" |
  "hare_fill" |
  "headphones" |
  "heart" |
  "heart_circle" |
  "heart_circle_fill" |
  "heart_fill" |
  "heart_slash" |
  "heart_slash_circle" |
  "heart_slash_circle_fill" |
  "heart_slash_fill" |
  "helm" |
  "hexagon" |
  "hexagon_fill" |
  "hifispeaker" |
  "hifispeaker_fill" |
  "hourglass" |
  "hourglass_bottomhalf_fill" |
  "hourglass_tophalf_fill" |
  "house" |
  "house_alt" |
  "house_alt_fill" |
  "house_fill" |
  "hurricane" |
  "increase_indent" |
  "increase_quotelevel" |
  "infinite" |
  "info" |
  "info_circle" |
  "info_circle_fill" |
  "italic" |
  "keyboard" |
  "keyboard_chevron_compact_down" |
  "lab_flask" |
  "lab_flask_solid" |
  "largecircle_fill_circle" |
  "lasso" |
  "layers" |
  "layers_alt" |
  "layers_alt_fill" |
  "layers_fill" |
  "leaf_arrow_circlepath" |
  "lessthan" |
  "lessthan_circle" |
  "lessthan_circle_fill" |
  "lessthan_square" |
  "lessthan_square_fill" |
  "light_max" |
  "light_min" |
  "lightbulb" |
  "lightbulb_fill" |
  "lightbulb_slash" |
  "lightbulb_slash_fill" |
  "link" |
  "link_circle" |
  "link_circle_fill" |
  "list_bullet" |
  "list_bullet_below_rectangle" |
  "list_bullet_indent" |
  "list_dash" |
  "list_number" |
  "list_number_rtl" |
  "location" |
  "location_circle" |
  "location_circle_fill" |
  "location_fill" |
  "location_north" |
  "location_north_fill" |
  "location_north_line" |
  "location_north_line_fill" |
  "location_slash" |
  "location_slash_fill" |
  "lock" |
  "lock_circle" |
  "lock_circle_fill" |
  "lock_fill" |
  "lock_open" |
  "lock_open_fill" |
  "lock_rotation" |
  "lock_rotation_open" |
  "lock_shield" |
  "lock_shield_fill" |
  "lock_slash" |
  "lock_slash_fill" |
  "macwindow" |
  "map" |
  "map_fill" |
  "map_pin" |
  "map_pin_ellipse" |
  "map_pin_slash" |
  "memories" |
  "memories_badge_minus" |
  "memories_badge_plus" |
  "metronome" |
  "mic" |
  "mic_circle" |
  "mic_circle_fill" |
  "mic_fill" |
  "mic_slash" |
  "mic_slash_fill" |
  "minus" |
  "minus_circle" |
  "minus_circle_fill" |
  "minus_rectangle" |
  "minus_rectangle_fill" |
  "minus_slash_plus" |
  "minus_square" |
  "minus_square_fill" |
  "money_dollar" |
  "money_dollar_circle" |
  "money_dollar_circle_fill" |
  "money_euro" |
  "money_euro_circle" |
  "money_euro_circle_fill" |
  "money_pound" |
  "money_pound_circle" |
  "money_pound_circle_fill" |
  "money_rubl" |
  "money_rubl_circle" |
  "money_rubl_circle_fill" |
  "money_yen" |
  "money_yen_circle" |
  "money_yen_circle_fill" |
  "moon" |
  "moon_circle" |
  "moon_circle_fill" |
  "moon_fill" |
  "moon_stars" |
  "moon_stars_fill" |
  "moon_zzz" |
  "moon_zzz_fill" |
  "move" |
  "multiply" |
  "multiply_circle" |
  "multiply_circle_fill" |
  "multiply_square" |
  "multiply_square_fill" |
  "music_albums" |
  "music_albums_fill" |
  "music_house" |
  "music_house_fill" |
  "music_mic" |
  "music_note" |
  "music_note_2" |
  "music_note_list" |
  "news" |
  "news_solid" |
  "nosign" |
  "number" |
  "number_circle" |
  "number_circle_fill" |
  "number_square" |
  "number_square_fill" |
  "option" |
  "paintbrush" |
  "paintbrush_fill" |
  "pano" |
  "pano_fill" |
  "paperclip" |
  "paperplane" |
  "paperplane_fill" |
  "paragraph" |
  "pause" |
  "pause_circle" |
  "pause_circle_fill" |
  "pause_fill" |
  "pause_rectangle" |
  "pause_rectangle_fill" |
  "paw" |
  "pencil" |
  "pencil_circle" |
  "pencil_circle_fill" |
  "pencil_ellipsis_rectangle" |
  "pencil_outline" |
  "pencil_slash" |
  "percent" |
  "person" |
  "person_2" |
  "person_2_alt" |
  "person_2_fill" |
  "person_2_square_stack" |
  "person_2_square_stack_fill" |
  "person_3" |
  "person_3_fill" |
  "person_alt" |
  "person_alt_circle" |
  "person_alt_circle_fill" |
  "person_badge_minus" |
  "person_badge_minus_fill" |
  "person_badge_plus" |
  "person_badge_plus_fill" |
  "person_circle" |
  "person_circle_fill" |
  "person_crop_circle" |
  "person_crop_circle_badge_checkmark" |
  "person_crop_circle_badge_exclam" |
  "person_crop_circle_badge_minus" |
  "person_crop_circle_badge_plus" |
  "person_crop_circle_badge_xmark" |
  "person_crop_circle_fill" |
  "person_crop_circle_fill_badge_checkmark" |
  "person_crop_circle_fill_badge_exclam" |
  "person_crop_circle_fill_badge_minus" |
  "person_crop_circle_fill_badge_plus" |
  "person_crop_circle_fill_badge_xmark" |
  "person_crop_rectangle" |
  "person_crop_rectangle_fill" |
  "person_crop_square" |
  "person_crop_square_fill" |
  "person_fill" |
  "personalhotspot" |
  "perspective" |
  "phone" |
  "phone_arrow_down_left" |
  "phone_arrow_right" |
  "phone_arrow_up_right" |
  "phone_badge_plus" |
  "phone_circle" |
  "phone_circle_fill" |
  "phone_down" |
  "phone_down_circle" |
  "phone_down_circle_fill" |
  "phone_down_fill" |
  "phone_fill" |
  "phone_fill_arrow_down_left" |
  "phone_fill_arrow_right" |
  "phone_fill_arrow_up_right" |
  "phone_fill_badge_plus" |
  "photo" |
  "photo_fill" |
  "photo_fill_on_rectangle_fill" |
  "photo_on_rectangle" |
  "piano" |
  "pin" |
  "pin_fill" |
  "pin_slash" |
  "pin_slash_fill" |
  "placemark" |
  "placemark_fill" |
  "play" |
  "play_circle" |
  "play_circle_fill" |
  "play_fill" |
  "play_rectangle" |
  "play_rectangle_fill" |
  "playpause" |
  "playpause_fill" |
  "plus" |
  "plus_app" |
  "plus_app_fill" |
  "plus_bubble" |
  "plus_bubble_fill" |
  "plus_circle" |
  "plus_circle_fill" |
  "plus_rectangle" |
  "plus_rectangle_fill" |
  "plus_rectangle_fill_on_rectangle_fill" |
  "plus_rectangle_on_rectangle" |
  "plus_slash_minus" |
  "plus_square" |
  "plus_square_fill" |
  "plus_square_fill_on_square_fill" |
  "plus_square_on_square" |
  "plusminus" |
  "plusminus_circle" |
  "plusminus_circle_fill" |
  "power" |
  "printer" |
  "printer_fill" |
  "projective" |
  "purchased" |
  "purchased_circle" |
  "purchased_circle_fill" |
  "qrcode" |
  "qrcode_viewfinder" |
  "question" |
  "question_circle" |
  "question_circle_fill" |
  "question_diamond" |
  "question_diamond_fill" |
  "question_square" |
  "question_square_fill" |
  "quote_bubble" |
  "quote_bubble_fill" |
  "radiowaves_left" |
  "radiowaves_right" |
  "rays" |
  "recordingtape" |
  "rectangle" |
  "rectangle_3_offgrid" |
  "rectangle_3_offgrid_fill" |
  "rectangle_arrow_up_right_arrow_down_left" |
  "rectangle_arrow_up_right_arrow_down_left_slash" |
  "rectangle_badge_checkmark" |
  "rectangle_badge_xmark" |
  "rectangle_compress_vertical" |
  "rectangle_dock" |
  "rectangle_expand_vertical" |
  "rectangle_fill" |
  "rectangle_fill_badge_checkmark" |
  "rectangle_fill_badge_xmark" |
  "rectangle_fill_on_rectangle_angled_fill" |
  "rectangle_fill_on_rectangle_fill" |
  "rectangle_grid_1x2" |
  "rectangle_grid_1x2_fill" |
  "rectangle_grid_2x2" |
  "rectangle_grid_2x2_fill" |
  "rectangle_grid_3x2" |
  "rectangle_grid_3x2_fill" |
  "rectangle_on_rectangle" |
  "rectangle_on_rectangle_angled" |
  "rectangle_paperclip" |
  "rectangle_split_3x1" |
  "rectangle_split_3x1_fill" |
  "rectangle_split_3x3" |
  "rectangle_split_3x3_fill" |
  "rectangle_stack" |
  "rectangle_stack_badge_minus" |
  "rectangle_stack_badge_person_crop" |
  "rectangle_stack_badge_plus" |
  "rectangle_stack_fill" |
  "rectangle_stack_fill_badge_minus" |
  "rectangle_stack_fill_badge_person_crop" |
  "rectangle_stack_fill_badge_plus" |
  "rectangle_stack_person_crop" |
  "rectangle_stack_person_crop_fill" |
  "repeat" |
  "repeat_1" |
  "resize" |
  "resize_h" |
  "resize_v" |
  "return_icon" |
  "rhombus" |
  "rhombus_fill" |
  "rocket" |
  "rocket_fill" |
  "rosette" |
  "rotate_left" |
  "rotate_left_fill" |
  "rotate_right" |
  "rotate_right_fill" |
  "scissors" |
  "scissors_alt" |
  "scope" |
  "scribble" |
  "search" |
  "search_circle" |
  "search_circle_fill" |
  "selection_pin_in_out" |
  "shield" |
  "shield_fill" |
  "shield_lefthalf_fill" |
  "shield_slash" |
  "shield_slash_fill" |
  "shift" |
  "shift_fill" |
  "shuffle" |
  "sidebar_left" |
  "sidebar_right" |
  "signature" |
  "skew" |
  "slash_circle" |
  "slash_circle_fill" |
  "slider_horizontal_below_rectangle" |
  "slowmo" |
  "smallcircle_circle" |
  "smallcircle_circle_fill" |
  "smallcircle_fill_circle" |
  "smallcircle_fill_circle_fill" |
  "smiley" |
  "smiley_fill" |
  "smoke" |
  "smoke_fill" |
  "snow" |
  "sort_down" |
  "sort_down_circle" |
  "sort_down_circle_fill" |
  "sort_up" |
  "sort_up_circle" |
  "sort_up_circle_fill" |
  "sparkles" |
  "speaker" |
  "speaker_1" |
  "speaker_1_fill" |
  "speaker_2" |
  "speaker_2_fill" |
  "speaker_3" |
  "speaker_3_fill" |
  "speaker_fill" |
  "speaker_slash" |
  "speaker_slash_fill" |
  "speaker_slash_fill_rtl" |
  "speaker_slash_rtl" |
  "speaker_zzz" |
  "speaker_zzz_fill" |
  "speaker_zzz_fill_rtl" |
  "speaker_zzz_rtl" |
  "speedometer" |
  "sportscourt" |
  "sportscourt_fill" |
  "square" |
  "square_arrow_down" |
  "square_arrow_down_fill" |
  "square_arrow_down_on_square" |
  "square_arrow_down_on_square_fill" |
  "square_arrow_left" |
  "square_arrow_left_fill" |
  "square_arrow_right" |
  "square_arrow_right_fill" |
  "square_arrow_up" |
  "square_arrow_up_fill" |
  "square_arrow_up_on_square" |
  "square_arrow_up_on_square_fill" |
  "square_favorites" |
  "square_favorites_alt" |
  "square_favorites_alt_fill" |
  "square_favorites_fill" |
  "square_fill" |
  "square_fill_line_vertical_square" |
  "square_fill_line_vertical_square_fill" |
  "square_fill_on_circle_fill" |
  "square_fill_on_square_fill" |
  "square_grid_2x2" |
  "square_grid_2x2_fill" |
  "square_grid_3x2" |
  "square_grid_3x2_fill" |
  "square_grid_4x3_fill" |
  "square_lefthalf_fill" |
  "square_line_vertical_square" |
  "square_line_vertical_square_fill" |
  "square_list" |
  "square_list_fill" |
  "square_on_circle" |
  "square_on_square" |
  "square_pencil" |
  "square_pencil_fill" |
  "square_righthalf_fill" |
  "square_split_1x2" |
  "square_split_1x2_fill" |
  "square_split_2x1" |
  "square_split_2x1_fill" |
  "square_split_2x2" |
  "square_split_2x2_fill" |
  "square_stack" |
  "square_stack_3d_down_dottedline" |
  "square_stack_3d_down_right" |
  "square_stack_3d_down_right_fill" |
  "square_stack_3d_up" |
  "square_stack_3d_up_fill" |
  "square_stack_3d_up_slash" |
  "square_stack_3d_up_slash_fill" |
  "square_stack_fill" |
  "squares_below_rectangle" |
  "star" |
  "star_circle" |
  "star_circle_fill" |
  "star_fill" |
  "star_lefthalf_fill" |
  "star_slash" |
  "star_slash_fill" |
  "staroflife" |
  "staroflife_fill" |
  "stop" |
  "stop_circle" |
  "stop_circle_fill" |
  "stop_fill" |
  "stopwatch" |
  "stopwatch_fill" |
  "strikethrough" |
  "suit_club" |
  "suit_club_fill" |
  "suit_diamond" |
  "suit_diamond_fill" |
  "suit_heart" |
  "suit_heart_fill" |
  "suit_spade" |
  "suit_spade_fill" |
  "sum" |
  "sun_dust" |
  "sun_dust_fill" |
  "sun_haze" |
  "sun_haze_fill" |
  "sun_max" |
  "sun_max_fill" |
  "sun_min" |
  "sun_min_fill" |
  "sunrise" |
  "sunrise_fill" |
  "sunset" |
  "sunset_fill" |
  "t_bubble" |
  "t_bubble_fill" |
  "table" |
  "table_badge_more" |
  "table_badge_more_fill" |
  "table_fill" |
  "tag" |
  "tag_circle" |
  "tag_circle_fill" |
  "tag_fill" |
  "text_aligncenter" |
  "text_alignleft" |
  "text_alignright" |
  "text_append" |
  "text_badge_checkmark" |
  "text_badge_minus" |
  "text_badge_plus" |
  "text_badge_star" |
  "text_badge_xmark" |
  "text_bubble" |
  "text_bubble_fill" |
  "text_cursor" |
  "text_insert" |
  "text_justify" |
  "text_justifyleft" |
  "text_justifyright" |
  "text_quote" |
  "textbox" |
  "textformat" |
  "textformat_123" |
  "textformat_abc" |
  "textformat_abc_dottedunderline" |
  "textformat_alt" |
  "textformat_size" |
  "textformat_subscript" |
  "textformat_superscript" |
  "thermometer" |
  "thermometer_snowflake" |
  "thermometer_sun" |
  "ticket" |
  "ticket_fill" |
  "tickets" |
  "tickets_fill" |
  "timelapse" |
  "timer" |
  "timer_fill" |
  "today" |
  "today_fill" |
  "tornado" |
  "tortoise" |
  "tortoise_fill" |
  "train_style_one" |
  "train_style_two" |
  "tram_fill" |
  "trash" |
  "trash_circle" |
  "trash_circle_fill" |
  "trash_fill" |
  "trash_slash" |
  "trash_slash_fill" |
  "tray" |
  "tray_2" |
  "tray_2_fill" |
  "tray_arrow_down" |
  "tray_arrow_down_fill" |
  "tray_arrow_up" |
  "tray_arrow_up_fill" |
  "tray_fill" |
  "tray_full" |
  "tray_full_fill" |
  "tree" |
  "triangle" |
  "triangle_fill" |
  "triangle_lefthalf_fill" |
  "triangle_righthalf_fill" |
  "tropicalstorm" |
  "tuningfork" |
  "tv" |
  "tv_circle" |
  "tv_circle_fill" |
  "tv_fill" |
  "tv_music_note" |
  "tv_music_note_fill" |
  "umbrella" |
  "umbrella_fill" |
  "underline" |
  "upload_circle" |
  "upload_circle_fill" |
  "videocam" |
  "videocam_circle" |
  "videocam_circle_fill" |
  "videocam_fill" |
  "viewfinder" |
  "viewfinder_circle" |
  "viewfinder_circle_fill" |
  "wand_rays" |
  "wand_rays_inverse" |
  "wand_stars" |
  "wand_stars_inverse" |
  "waveform" |
  "waveform_circle" |
  "waveform_circle_fill" |
  "waveform_path" |
  "waveform_path_badge_minus" |
  "waveform_path_badge_plus" |
  "waveform_path_ecg" |
  "wifi" |
  "wifi_exclamationmark" |
  "wifi_slash" |
  "wind" |
  "wind_snow" |
  "wrench" |
  "wrench_fill" |
  "xmark" |
  "xmark_circle" |
  "xmark_circle_fill" |
  "xmark_octagon" |
  "xmark_octagon_fill" |
  "xmark_rectangle" |
  "xmark_rectangle_fill" |
  "xmark_seal" |
  "xmark_seal_fill" |
  "xmark_shield" |
  "xmark_shield_fill" |
  "xmark_square" |
  "xmark_square_fill" |
  "zoom_in" |
  "zoom_out" |
  "zzz";

/** Manifest: map of `IconName` to relative SVG path. */
export type CupertinoIconsManifest = Record<IconName, string>;

/** Manifest of all icon names to their SVG paths. */
declare const manifest: CupertinoIconsManifest;
export default manifest;

/** Named icon exports: each is the SVG asset URL (string). */
export const Airplane: string;
export const Alarm: string;
export const AlarmFill: string;
export const Alt: string;
export const Ant: string;
export const AntCircle: string;
export const AntCircleFill: string;
export const AntFill: string;
export const AntennaRadiowavesLeftRight: string;
export const App: string;
export const AppBadge: string;
export const AppBadgeFill: string;
export const AppFill: string;
export const Archivebox: string;
export const ArchiveboxFill: string;
export const ArrowBranch: string;
export const ArrowClockwise: string;
export const ArrowClockwiseCircle: string;
export const ArrowClockwiseCircleFill: string;
export const ArrowCounterclockwise: string;
export const ArrowCounterclockwiseCircle: string;
export const ArrowCounterclockwiseCircleFill: string;
export const ArrowDown: string;
export const ArrowDownCircle: string;
export const ArrowDownCircleFill: string;
export const ArrowDownDoc: string;
export const ArrowDownDocFill: string;
export const ArrowDownLeft: string;
export const ArrowDownLeftCircle: string;
export const ArrowDownLeftCircleFill: string;
export const ArrowDownLeftSquare: string;
export const ArrowDownLeftSquareFill: string;
export const ArrowDownRight: string;
export const ArrowDownRightArrowUpLeft: string;
export const ArrowDownRightCircle: string;
export const ArrowDownRightCircleFill: string;
export const ArrowDownRightSquare: string;
export const ArrowDownRightSquareFill: string;
export const ArrowDownSquare: string;
export const ArrowDownSquareFill: string;
export const ArrowDownToLine: string;
export const ArrowDownToLineAlt: string;
export const ArrowLeft: string;
export const ArrowLeftCircle: string;
export const ArrowLeftCircleFill: string;
export const ArrowLeftRight: string;
export const ArrowLeftRightCircle: string;
export const ArrowLeftRightCircleFill: string;
export const ArrowLeftRightSquare: string;
export const ArrowLeftRightSquareFill: string;
export const ArrowLeftSquare: string;
export const ArrowLeftSquareFill: string;
export const ArrowLeftToLine: string;
export const ArrowLeftToLineAlt: string;
export const ArrowMerge: string;
export const ArrowRight: string;
export const ArrowRightArrowLeft: string;
export const ArrowRightArrowLeftCircle: string;
export const ArrowRightArrowLeftCircleFill: string;
export const ArrowRightArrowLeftSquare: string;
export const ArrowRightArrowLeftSquareFill: string;
export const ArrowRightCircle: string;
export const ArrowRightCircleFill: string;
export const ArrowRightSquare: string;
export const ArrowRightSquareFill: string;
export const ArrowRightToLine: string;
export const ArrowRightToLineAlt: string;
export const ArrowSwap: string;
export const ArrowTurnDownLeft: string;
export const ArrowTurnDownRight: string;
export const ArrowTurnLeftDown: string;
export const ArrowTurnLeftUp: string;
export const ArrowTurnRightDown: string;
export const ArrowTurnRightUp: string;
export const ArrowTurnUpLeft: string;
export const ArrowTurnUpRight: string;
export const ArrowUp: string;
export const ArrowUpArrowDown: string;
export const ArrowUpArrowDownCircle: string;
export const ArrowUpArrowDownCircleFill: string;
export const ArrowUpArrowDownSquare: string;
export const ArrowUpArrowDownSquareFill: string;
export const ArrowUpBin: string;
export const ArrowUpBinFill: string;
export const ArrowUpCircle: string;
export const ArrowUpCircleFill: string;
export const ArrowUpDoc: string;
export const ArrowUpDocFill: string;
export const ArrowUpDown: string;
export const ArrowUpDownCircle: string;
export const ArrowUpDownCircleFill: string;
export const ArrowUpDownSquare: string;
export const ArrowUpDownSquareFill: string;
export const ArrowUpLeft: string;
export const ArrowUpLeftArrowDownRight: string;
export const ArrowUpLeftCircle: string;
export const ArrowUpLeftCircleFill: string;
export const ArrowUpLeftSquare: string;
export const ArrowUpLeftSquareFill: string;
export const ArrowUpRight: string;
export const ArrowUpRightCircle: string;
export const ArrowUpRightCircleFill: string;
export const ArrowUpRightDiamond: string;
export const ArrowUpRightDiamondFill: string;
export const ArrowUpRightSquare: string;
export const ArrowUpRightSquareFill: string;
export const ArrowUpSquare: string;
export const ArrowUpSquareFill: string;
export const ArrowUpToLine: string;
export const ArrowUpToLineAlt: string;
export const ArrowUturnDown: string;
export const ArrowUturnDownCircle: string;
export const ArrowUturnDownCircleFill: string;
export const ArrowUturnDownSquare: string;
export const ArrowUturnDownSquareFill: string;
export const ArrowUturnLeft: string;
export const ArrowUturnLeftCircle: string;
export const ArrowUturnLeftCircleFill: string;
export const ArrowUturnLeftSquare: string;
export const ArrowUturnLeftSquareFill: string;
export const ArrowUturnRight: string;
export const ArrowUturnRightCircle: string;
export const ArrowUturnRightCircleFill: string;
export const ArrowUturnRightSquare: string;
export const ArrowUturnRightSquareFill: string;
export const ArrowUturnUp: string;
export const ArrowUturnUpCircle: string;
export const ArrowUturnUpCircleFill: string;
export const ArrowUturnUpSquare: string;
export const ArrowUturnUpSquareFill: string;
export const ArrowshapeTurnUpLeft: string;
export const ArrowshapeTurnUpLeft2: string;
export const ArrowshapeTurnUpLeft2Fill: string;
export const ArrowshapeTurnUpLeftCircle: string;
export const ArrowshapeTurnUpLeftCircleFill: string;
export const ArrowshapeTurnUpLeftFill: string;
export const ArrowshapeTurnUpRight: string;
export const ArrowshapeTurnUpRightCircle: string;
export const ArrowshapeTurnUpRightCircleFill: string;
export const ArrowshapeTurnUpRightFill: string;
export const ArrowtriangleDown: string;
export const ArrowtriangleDownCircle: string;
export const ArrowtriangleDownCircleFill: string;
export const ArrowtriangleDownFill: string;
export const ArrowtriangleDownSquare: string;
export const ArrowtriangleDownSquareFill: string;
export const ArrowtriangleLeft: string;
export const ArrowtriangleLeftCircle: string;
export const ArrowtriangleLeftCircleFill: string;
export const ArrowtriangleLeftFill: string;
export const ArrowtriangleLeftSquare: string;
export const ArrowtriangleLeftSquareFill: string;
export const ArrowtriangleRight: string;
export const ArrowtriangleRightCircle: string;
export const ArrowtriangleRightCircleFill: string;
export const ArrowtriangleRightFill: string;
export const ArrowtriangleRightSquare: string;
export const ArrowtriangleRightSquareFill: string;
export const ArrowtriangleUp: string;
export const ArrowtriangleUpCircle: string;
export const ArrowtriangleUpCircleFill: string;
export const ArrowtriangleUpFill: string;
export const ArrowtriangleUpSquare: string;
export const ArrowtriangleUpSquareFill: string;
export const AsteriskCircle: string;
export const AsteriskCircleFill: string;
export const At: string;
export const AtBadgeMinus: string;
export const AtBadgePlus: string;
export const AtCircle: string;
export const AtCircleFill: string;
export const Backward: string;
export const BackwardEnd: string;
export const BackwardEndAlt: string;
export const BackwardEndAltFill: string;
export const BackwardEndFill: string;
export const BackwardFill: string;
export const BadgePlusRadiowavesRight: string;
export const Bag: string;
export const BagBadgeMinus: string;
export const BagBadgePlus: string;
export const BagFill: string;
export const BagFillBadgeMinus: string;
export const BagFillBadgePlus: string;
export const Bandage: string;
export const BandageFill: string;
export const Barcode: string;
export const BarcodeViewfinder: string;
export const Bars: string;
export const BedDouble: string;
export const BedDoubleFill: string;
export const Bell: string;
export const BellCircle: string;
export const BellCircleFill: string;
export const BellFill: string;
export const BellSlash: string;
export const BellSlashFill: string;
export const BinXmark: string;
export const BinXmarkFill: string;
export const Bitcoin: string;
export const BitcoinCircle: string;
export const BitcoinCircleFill: string;
export const Bluetooth: string;
export const Bold: string;
export const BoldItalicUnderline: string;
export const BoldUnderline: string;
export const Bolt: string;
export const BoltBadgeA: string;
export const BoltBadgeAFill: string;
export const BoltCircle: string;
export const BoltCircleFill: string;
export const BoltFill: string;
export const BoltHorizontal: string;
export const BoltHorizontalCircle: string;
export const BoltHorizontalCircleFill: string;
export const BoltHorizontalFill: string;
export const BoltSlash: string;
export const BoltSlashFill: string;
export const Book: string;
export const BookCircle: string;
export const BookCircleFill: string;
export const BookFill: string;
export const Bookmark: string;
export const BookmarkFill: string;
export const Briefcase: string;
export const BriefcaseFill: string;
export const BubbleLeft: string;
export const BubbleLeftBubbleRight: string;
export const BubbleLeftBubbleRightFill: string;
export const BubbleLeftFill: string;
export const BubbleMiddleBottom: string;
export const BubbleMiddleBottomFill: string;
export const BubbleMiddleTop: string;
export const BubbleMiddleTopFill: string;
export const BubbleRight: string;
export const BubbleRightFill: string;
export const Burn: string;
export const Burst: string;
export const BurstFill: string;
export const Bus: string;
export const Calendar: string;
export const CalendarBadgeMinus: string;
export const CalendarBadgePlus: string;
export const CalendarCircle: string;
export const CalendarCircleFill: string;
export const CalendarToday: string;
export const Camera: string;
export const CameraCircle: string;
export const CameraCircleFill: string;
export const CameraFill: string;
export const CameraOnRectangle: string;
export const CameraOnRectangleFill: string;
export const CameraRotate: string;
export const CameraRotateFill: string;
export const CameraViewfinder: string;
export const Capslock: string;
export const CapslockFill: string;
export const Capsule: string;
export const CapsuleFill: string;
export const CaptionsBubble: string;
export const CaptionsBubbleFill: string;
export const Car: string;
export const CarDetailed: string;
export const CarFill: string;
export const Cart: string;
export const CartBadgeMinus: string;
export const CartBadgePlus: string;
export const CartFill: string;
export const CartFillBadgeMinus: string;
export const CartFillBadgePlus: string;
export const ChartBar: string;
export const ChartBarAltFill: string;
export const ChartBarCircle: string;
export const ChartBarCircleFill: string;
export const ChartBarFill: string;
export const ChartBarSquare: string;
export const ChartBarSquareFill: string;
export const ChartPie: string;
export const ChartPieFill: string;
export const ChatBubble: string;
export const ChatBubble2: string;
export const ChatBubble2Fill: string;
export const ChatBubbleFill: string;
export const ChatBubbleText: string;
export const ChatBubbleTextFill: string;
export const Checkmark: string;
export const CheckmarkAlt: string;
export const CheckmarkAltCircle: string;
export const CheckmarkAltCircleFill: string;
export const CheckmarkCircle: string;
export const CheckmarkCircleFill: string;
export const CheckmarkRectangle: string;
export const CheckmarkRectangleFill: string;
export const CheckmarkSeal: string;
export const CheckmarkSealFill: string;
export const CheckmarkShield: string;
export const CheckmarkShieldFill: string;
export const CheckmarkSquare: string;
export const CheckmarkSquareFill: string;
export const ChevronBack: string;
export const ChevronCompactDown: string;
export const ChevronCompactLeft: string;
export const ChevronCompactRight: string;
export const ChevronCompactUp: string;
export const ChevronDown: string;
export const ChevronDownCircle: string;
export const ChevronDownCircleFill: string;
export const ChevronDownSquare: string;
export const ChevronDownSquareFill: string;
export const ChevronForward: string;
export const ChevronLeft: string;
export const ChevronLeft2: string;
export const ChevronLeftCircle: string;
export const ChevronLeftCircleFill: string;
export const ChevronLeftSlashChevronRight: string;
export const ChevronLeftSquare: string;
export const ChevronLeftSquareFill: string;
export const ChevronRight: string;
export const ChevronRight2: string;
export const ChevronRightCircle: string;
export const ChevronRightCircleFill: string;
export const ChevronRightSquare: string;
export const ChevronRightSquareFill: string;
export const ChevronUp: string;
export const ChevronUpChevronDown: string;
export const ChevronUpCircle: string;
export const ChevronUpCircleFill: string;
export const ChevronUpSquare: string;
export const ChevronUpSquareFill: string;
export const Circle: string;
export const CircleBottomthirdSplit: string;
export const CircleFill: string;
export const CircleGrid3x3: string;
export const CircleGrid3x3Fill: string;
export const CircleGridHex: string;
export const CircleGridHexFill: string;
export const CircleLefthalfFill: string;
export const CircleRighthalfFill: string;
export const Clear: string;
export const ClearFill: string;
export const Clock: string;
export const ClockFill: string;
export const Cloud: string;
export const CloudBolt: string;
export const CloudBoltFill: string;
export const CloudBoltRain: string;
export const CloudBoltRainFill: string;
export const CloudDownload: string;
export const CloudDownloadFill: string;
export const CloudDrizzle: string;
export const CloudDrizzleFill: string;
export const CloudFill: string;
export const CloudFog: string;
export const CloudFogFill: string;
export const CloudHail: string;
export const CloudHailFill: string;
export const CloudHeavyrain: string;
export const CloudHeavyrainFill: string;
export const CloudMoon: string;
export const CloudMoonBolt: string;
export const CloudMoonBoltFill: string;
export const CloudMoonFill: string;
export const CloudMoonRain: string;
export const CloudMoonRainFill: string;
export const CloudRain: string;
export const CloudRainFill: string;
export const CloudSleet: string;
export const CloudSleetFill: string;
export const CloudSnow: string;
export const CloudSnowFill: string;
export const CloudSun: string;
export const CloudSunBolt: string;
export const CloudSunBoltFill: string;
export const CloudSunFill: string;
export const CloudSunRain: string;
export const CloudSunRainFill: string;
export const CloudUpload: string;
export const CloudUploadFill: string;
export const ColorFilter: string;
export const ColorFilterFill: string;
export const Command: string;
export const Compass: string;
export const CompassFill: string;
export const Control: string;
export const Creditcard: string;
export const CreditcardFill: string;
export const Crop: string;
export const CropRotate: string;
export const Cube: string;
export const CubeBox: string;
export const CubeBoxFill: string;
export const CubeFill: string;
export const CursorRays: string;
export const DecreaseIndent: string;
export const DecreaseQuotelevel: string;
export const DeleteLeft: string;
export const DeleteLeftFill: string;
export const DeleteRight: string;
export const DeleteRightFill: string;
export const Desktopcomputer: string;
export const DeviceDesktop: string;
export const DeviceLaptop: string;
export const DevicePhoneLandscape: string;
export const DevicePhonePortrait: string;
export const Dial: string;
export const DialFill: string;
export const Divide: string;
export const DivideCircle: string;
export const DivideCircleFill: string;
export const DivideSquare: string;
export const DivideSquareFill: string;
export const Doc: string;
export const DocAppend: string;
export const DocChart: string;
export const DocChartFill: string;
export const DocCheckmark: string;
export const DocCheckmarkFill: string;
export const DocCircle: string;
export const DocCircleFill: string;
export const DocFill: string;
export const DocOnClipboard: string;
export const DocOnClipboardFill: string;
export const DocOnDoc: string;
export const DocOnDocFill: string;
export const DocPerson: string;
export const DocPersonFill: string;
export const DocPlaintext: string;
export const DocRichtext: string;
export const DocText: string;
export const DocTextFill: string;
export const DocTextSearch: string;
export const DocTextViewfinder: string;
export const DotRadiowavesLeftRight: string;
export const DotRadiowavesRight: string;
export const DotSquare: string;
export const DotSquareFill: string;
export const DownloadCircle: string;
export const DownloadCircleFill: string;
export const Drop: string;
export const DropFill: string;
export const DropTriangle: string;
export const DropTriangleFill: string;
export const Ear: string;
export const Eject: string;
export const EjectFill: string;
export const EllipsesBubble: string;
export const EllipsesBubbleFill: string;
export const Ellipsis: string;
export const EllipsisCircle: string;
export const EllipsisCircleFill: string;
export const EllipsisVertical: string;
export const EllipsisVerticalCircle: string;
export const EllipsisVerticalCircleFill: string;
export const Envelope: string;
export const EnvelopeBadge: string;
export const EnvelopeBadgeFill: string;
export const EnvelopeCircle: string;
export const EnvelopeCircleFill: string;
export const EnvelopeFill: string;
export const EnvelopeOpen: string;
export const EnvelopeOpenFill: string;
export const Equal: string;
export const EqualCircle: string;
export const EqualCircleFill: string;
export const EqualSquare: string;
export const EqualSquareFill: string;
export const Escape: string;
export const Exclamationmark: string;
export const ExclamationmarkBubble: string;
export const ExclamationmarkBubbleFill: string;
export const ExclamationmarkCircle: string;
export const ExclamationmarkCircleFill: string;
export const ExclamationmarkOctagon: string;
export const ExclamationmarkOctagonFill: string;
export const ExclamationmarkShield: string;
export const ExclamationmarkShieldFill: string;
export const ExclamationmarkSquare: string;
export const ExclamationmarkSquareFill: string;
export const ExclamationmarkTriangle: string;
export const ExclamationmarkTriangleFill: string;
export const Eye: string;
export const EyeFill: string;
export const EyeSlash: string;
export const EyeSlashFill: string;
export const Eyedropper: string;
export const EyedropperFull: string;
export const EyedropperHalffull: string;
export const Eyeglasses: string;
export const FCursive: string;
export const FCursiveCircle: string;
export const FCursiveCircleFill: string;
export const Film: string;
export const FilmFill: string;
export const Flag: string;
export const FlagCircle: string;
export const FlagCircleFill: string;
export const FlagFill: string;
export const FlagSlash: string;
export const FlagSlashFill: string;
export const Flame: string;
export const FlameFill: string;
export const FloppyDisk: string;
export const Flowchart: string;
export const FlowchartFill: string;
export const Folder: string;
export const FolderBadgeMinus: string;
export const FolderBadgePersonCrop: string;
export const FolderBadgePlus: string;
export const FolderCircle: string;
export const FolderCircleFill: string;
export const FolderFill: string;
export const FolderFillBadgeMinus: string;
export const FolderFillBadgePersonCrop: string;
export const FolderFillBadgePlus: string;
export const Forward: string;
export const ForwardEnd: string;
export const ForwardEndAlt: string;
export const ForwardEndAltFill: string;
export const ForwardEndFill: string;
export const ForwardFill: string;
export const Function: string;
export const Fx: string;
export const Gamecontroller: string;
export const GamecontrollerAltFill: string;
export const GamecontrollerFill: string;
export const Gauge: string;
export const GaugeBadgeMinus: string;
export const GaugeBadgePlus: string;
export const Gear: string;
export const GearAlt: string;
export const GearAltFill: string;
export const Gift: string;
export const GiftAlt: string;
export const GiftAltFill: string;
export const GiftFill: string;
export const Globe: string;
export const Gobackward: string;
export const Gobackward10: string;
export const Gobackward15: string;
export const Gobackward30: string;
export const Gobackward45: string;
export const Gobackward60: string;
export const Gobackward75: string;
export const Gobackward90: string;
export const GobackwardMinus: string;
export const Goforward: string;
export const Goforward10: string;
export const Goforward15: string;
export const Goforward30: string;
export const Goforward45: string;
export const Goforward60: string;
export const Goforward75: string;
export const Goforward90: string;
export const GoforwardPlus: string;
export const GraphCircle: string;
export const GraphCircleFill: string;
export const GraphSquare: string;
export const GraphSquareFill: string;
export const Greaterthan: string;
export const GreaterthanCircle: string;
export const GreaterthanCircleFill: string;
export const GreaterthanSquare: string;
export const GreaterthanSquareFill: string;
export const Grid: string;
export const GridCircle: string;
export const GridCircleFill: string;
export const Guitars: string;
export const Hammer: string;
export const HammerFill: string;
export const HandDraw: string;
export const HandDrawFill: string;
export const HandPointLeft: string;
export const HandPointLeftFill: string;
export const HandPointRight: string;
export const HandPointRightFill: string;
export const HandRaised: string;
export const HandRaisedFill: string;
export const HandRaisedSlash: string;
export const HandRaisedSlashFill: string;
export const HandThumbsdown: string;
export const HandThumbsdownFill: string;
export const HandThumbsup: string;
export const HandThumbsupFill: string;
export const Hare: string;
export const HareFill: string;
export const Headphones: string;
export const Heart: string;
export const HeartCircle: string;
export const HeartCircleFill: string;
export const HeartFill: string;
export const HeartSlash: string;
export const HeartSlashCircle: string;
export const HeartSlashCircleFill: string;
export const HeartSlashFill: string;
export const Helm: string;
export const Hexagon: string;
export const HexagonFill: string;
export const Hifispeaker: string;
export const HifispeakerFill: string;
export const Hourglass: string;
export const HourglassBottomhalfFill: string;
export const HourglassTophalfFill: string;
export const House: string;
export const HouseAlt: string;
export const HouseAltFill: string;
export const HouseFill: string;
export const Hurricane: string;
export const IncreaseIndent: string;
export const IncreaseQuotelevel: string;
export const Infinite: string;
export const Info: string;
export const InfoCircle: string;
export const InfoCircleFill: string;
export const Italic: string;
export const Keyboard: string;
export const KeyboardChevronCompactDown: string;
export const LabFlask: string;
export const LabFlaskSolid: string;
export const LargecircleFillCircle: string;
export const Lasso: string;
export const Layers: string;
export const LayersAlt: string;
export const LayersAltFill: string;
export const LayersFill: string;
export const LeafArrowCirclepath: string;
export const Lessthan: string;
export const LessthanCircle: string;
export const LessthanCircleFill: string;
export const LessthanSquare: string;
export const LessthanSquareFill: string;
export const LightMax: string;
export const LightMin: string;
export const Lightbulb: string;
export const LightbulbFill: string;
export const LightbulbSlash: string;
export const LightbulbSlashFill: string;
export const Link: string;
export const LinkCircle: string;
export const LinkCircleFill: string;
export const ListBullet: string;
export const ListBulletBelowRectangle: string;
export const ListBulletIndent: string;
export const ListDash: string;
export const ListNumber: string;
export const ListNumberRtl: string;
export const Location: string;
export const LocationCircle: string;
export const LocationCircleFill: string;
export const LocationFill: string;
export const LocationNorth: string;
export const LocationNorthFill: string;
export const LocationNorthLine: string;
export const LocationNorthLineFill: string;
export const LocationSlash: string;
export const LocationSlashFill: string;
export const Lock: string;
export const LockCircle: string;
export const LockCircleFill: string;
export const LockFill: string;
export const LockOpen: string;
export const LockOpenFill: string;
export const LockRotation: string;
export const LockRotationOpen: string;
export const LockShield: string;
export const LockShieldFill: string;
export const LockSlash: string;
export const LockSlashFill: string;
export const Macwindow: string;
export const Map: string;
export const MapFill: string;
export const MapPin: string;
export const MapPinEllipse: string;
export const MapPinSlash: string;
export const Memories: string;
export const MemoriesBadgeMinus: string;
export const MemoriesBadgePlus: string;
export const Metronome: string;
export const Mic: string;
export const MicCircle: string;
export const MicCircleFill: string;
export const MicFill: string;
export const MicSlash: string;
export const MicSlashFill: string;
export const Minus: string;
export const MinusCircle: string;
export const MinusCircleFill: string;
export const MinusRectangle: string;
export const MinusRectangleFill: string;
export const MinusSlashPlus: string;
export const MinusSquare: string;
export const MinusSquareFill: string;
export const MoneyDollar: string;
export const MoneyDollarCircle: string;
export const MoneyDollarCircleFill: string;
export const MoneyEuro: string;
export const MoneyEuroCircle: string;
export const MoneyEuroCircleFill: string;
export const MoneyPound: string;
export const MoneyPoundCircle: string;
export const MoneyPoundCircleFill: string;
export const MoneyRubl: string;
export const MoneyRublCircle: string;
export const MoneyRublCircleFill: string;
export const MoneyYen: string;
export const MoneyYenCircle: string;
export const MoneyYenCircleFill: string;
export const Moon: string;
export const MoonCircle: string;
export const MoonCircleFill: string;
export const MoonFill: string;
export const MoonStars: string;
export const MoonStarsFill: string;
export const MoonZzz: string;
export const MoonZzzFill: string;
export const Move: string;
export const Multiply: string;
export const MultiplyCircle: string;
export const MultiplyCircleFill: string;
export const MultiplySquare: string;
export const MultiplySquareFill: string;
export const MusicAlbums: string;
export const MusicAlbumsFill: string;
export const MusicHouse: string;
export const MusicHouseFill: string;
export const MusicMic: string;
export const MusicNote: string;
export const MusicNote2: string;
export const MusicNoteList: string;
export const News: string;
export const NewsSolid: string;
export const Nosign: string;
export const Number: string;
export const NumberCircle: string;
export const NumberCircleFill: string;
export const NumberSquare: string;
export const NumberSquareFill: string;
export const Option: string;
export const Paintbrush: string;
export const PaintbrushFill: string;
export const Pano: string;
export const PanoFill: string;
export const Paperclip: string;
export const Paperplane: string;
export const PaperplaneFill: string;
export const Paragraph: string;
export const Pause: string;
export const PauseCircle: string;
export const PauseCircleFill: string;
export const PauseFill: string;
export const PauseRectangle: string;
export const PauseRectangleFill: string;
export const Paw: string;
export const Pencil: string;
export const PencilCircle: string;
export const PencilCircleFill: string;
export const PencilEllipsisRectangle: string;
export const PencilOutline: string;
export const PencilSlash: string;
export const Percent: string;
export const Person: string;
export const Person2: string;
export const Person2Alt: string;
export const Person2Fill: string;
export const Person2SquareStack: string;
export const Person2SquareStackFill: string;
export const Person3: string;
export const Person3Fill: string;
export const PersonAlt: string;
export const PersonAltCircle: string;
export const PersonAltCircleFill: string;
export const PersonBadgeMinus: string;
export const PersonBadgeMinusFill: string;
export const PersonBadgePlus: string;
export const PersonBadgePlusFill: string;
export const PersonCircle: string;
export const PersonCircleFill: string;
export const PersonCropCircle: string;
export const PersonCropCircleBadgeCheckmark: string;
export const PersonCropCircleBadgeExclam: string;
export const PersonCropCircleBadgeMinus: string;
export const PersonCropCircleBadgePlus: string;
export const PersonCropCircleBadgeXmark: string;
export const PersonCropCircleFill: string;
export const PersonCropCircleFillBadgeCheckmark: string;
export const PersonCropCircleFillBadgeExclam: string;
export const PersonCropCircleFillBadgeMinus: string;
export const PersonCropCircleFillBadgePlus: string;
export const PersonCropCircleFillBadgeXmark: string;
export const PersonCropRectangle: string;
export const PersonCropRectangleFill: string;
export const PersonCropSquare: string;
export const PersonCropSquareFill: string;
export const PersonFill: string;
export const Personalhotspot: string;
export const Perspective: string;
export const Phone: string;
export const PhoneArrowDownLeft: string;
export const PhoneArrowRight: string;
export const PhoneArrowUpRight: string;
export const PhoneBadgePlus: string;
export const PhoneCircle: string;
export const PhoneCircleFill: string;
export const PhoneDown: string;
export const PhoneDownCircle: string;
export const PhoneDownCircleFill: string;
export const PhoneDownFill: string;
export const PhoneFill: string;
export const PhoneFillArrowDownLeft: string;
export const PhoneFillArrowRight: string;
export const PhoneFillArrowUpRight: string;
export const PhoneFillBadgePlus: string;
export const Photo: string;
export const PhotoFill: string;
export const PhotoFillOnRectangleFill: string;
export const PhotoOnRectangle: string;
export const Piano: string;
export const Pin: string;
export const PinFill: string;
export const PinSlash: string;
export const PinSlashFill: string;
export const Placemark: string;
export const PlacemarkFill: string;
export const Play: string;
export const PlayCircle: string;
export const PlayCircleFill: string;
export const PlayFill: string;
export const PlayRectangle: string;
export const PlayRectangleFill: string;
export const Playpause: string;
export const PlaypauseFill: string;
export const Plus: string;
export const PlusApp: string;
export const PlusAppFill: string;
export const PlusBubble: string;
export const PlusBubbleFill: string;
export const PlusCircle: string;
export const PlusCircleFill: string;
export const PlusRectangle: string;
export const PlusRectangleFill: string;
export const PlusRectangleFillOnRectangleFill: string;
export const PlusRectangleOnRectangle: string;
export const PlusSlashMinus: string;
export const PlusSquare: string;
export const PlusSquareFill: string;
export const PlusSquareFillOnSquareFill: string;
export const PlusSquareOnSquare: string;
export const Plusminus: string;
export const PlusminusCircle: string;
export const PlusminusCircleFill: string;
export const Power: string;
export const Printer: string;
export const PrinterFill: string;
export const Projective: string;
export const Purchased: string;
export const PurchasedCircle: string;
export const PurchasedCircleFill: string;
export const Qrcode: string;
export const QrcodeViewfinder: string;
export const Question: string;
export const QuestionCircle: string;
export const QuestionCircleFill: string;
export const QuestionDiamond: string;
export const QuestionDiamondFill: string;
export const QuestionSquare: string;
export const QuestionSquareFill: string;
export const QuoteBubble: string;
export const QuoteBubbleFill: string;
export const RadiowavesLeft: string;
export const RadiowavesRight: string;
export const Rays: string;
export const Recordingtape: string;
export const Rectangle: string;
export const Rectangle3Offgrid: string;
export const Rectangle3OffgridFill: string;
export const RectangleArrowUpRightArrowDownLeft: string;
export const RectangleArrowUpRightArrowDownLeftSlash: string;
export const RectangleBadgeCheckmark: string;
export const RectangleBadgeXmark: string;
export const RectangleCompressVertical: string;
export const RectangleDock: string;
export const RectangleExpandVertical: string;
export const RectangleFill: string;
export const RectangleFillBadgeCheckmark: string;
export const RectangleFillBadgeXmark: string;
export const RectangleFillOnRectangleAngledFill: string;
export const RectangleFillOnRectangleFill: string;
export const RectangleGrid1x2: string;
export const RectangleGrid1x2Fill: string;
export const RectangleGrid2x2: string;
export const RectangleGrid2x2Fill: string;
export const RectangleGrid3x2: string;
export const RectangleGrid3x2Fill: string;
export const RectangleOnRectangle: string;
export const RectangleOnRectangleAngled: string;
export const RectanglePaperclip: string;
export const RectangleSplit3x1: string;
export const RectangleSplit3x1Fill: string;
export const RectangleSplit3x3: string;
export const RectangleSplit3x3Fill: string;
export const RectangleStack: string;
export const RectangleStackBadgeMinus: string;
export const RectangleStackBadgePersonCrop: string;
export const RectangleStackBadgePlus: string;
export const RectangleStackFill: string;
export const RectangleStackFillBadgeMinus: string;
export const RectangleStackFillBadgePersonCrop: string;
export const RectangleStackFillBadgePlus: string;
export const RectangleStackPersonCrop: string;
export const RectangleStackPersonCropFill: string;
export const Repeat: string;
export const Repeat1: string;
export const Resize: string;
export const ResizeH: string;
export const ResizeV: string;
export const ReturnIcon: string;
export const Rhombus: string;
export const RhombusFill: string;
export const Rocket: string;
export const RocketFill: string;
export const Rosette: string;
export const RotateLeft: string;
export const RotateLeftFill: string;
export const RotateRight: string;
export const RotateRightFill: string;
export const Scissors: string;
export const ScissorsAlt: string;
export const Scope: string;
export const Scribble: string;
export const Search: string;
export const SearchCircle: string;
export const SearchCircleFill: string;
export const SelectionPinInOut: string;
export const Shield: string;
export const ShieldFill: string;
export const ShieldLefthalfFill: string;
export const ShieldSlash: string;
export const ShieldSlashFill: string;
export const Shift: string;
export const ShiftFill: string;
export const Shuffle: string;
export const SidebarLeft: string;
export const SidebarRight: string;
export const Signature: string;
export const Skew: string;
export const SlashCircle: string;
export const SlashCircleFill: string;
export const SliderHorizontalBelowRectangle: string;
export const Slowmo: string;
export const SmallcircleCircle: string;
export const SmallcircleCircleFill: string;
export const SmallcircleFillCircle: string;
export const SmallcircleFillCircleFill: string;
export const Smiley: string;
export const SmileyFill: string;
export const Smoke: string;
export const SmokeFill: string;
export const Snow: string;
export const SortDown: string;
export const SortDownCircle: string;
export const SortDownCircleFill: string;
export const SortUp: string;
export const SortUpCircle: string;
export const SortUpCircleFill: string;
export const Sparkles: string;
export const Speaker: string;
export const Speaker1: string;
export const Speaker1Fill: string;
export const Speaker2: string;
export const Speaker2Fill: string;
export const Speaker3: string;
export const Speaker3Fill: string;
export const SpeakerFill: string;
export const SpeakerSlash: string;
export const SpeakerSlashFill: string;
export const SpeakerSlashFillRtl: string;
export const SpeakerSlashRtl: string;
export const SpeakerZzz: string;
export const SpeakerZzzFill: string;
export const SpeakerZzzFillRtl: string;
export const SpeakerZzzRtl: string;
export const Speedometer: string;
export const Sportscourt: string;
export const SportscourtFill: string;
export const Square: string;
export const SquareArrowDown: string;
export const SquareArrowDownFill: string;
export const SquareArrowDownOnSquare: string;
export const SquareArrowDownOnSquareFill: string;
export const SquareArrowLeft: string;
export const SquareArrowLeftFill: string;
export const SquareArrowRight: string;
export const SquareArrowRightFill: string;
export const SquareArrowUp: string;
export const SquareArrowUpFill: string;
export const SquareArrowUpOnSquare: string;
export const SquareArrowUpOnSquareFill: string;
export const SquareFavorites: string;
export const SquareFavoritesAlt: string;
export const SquareFavoritesAltFill: string;
export const SquareFavoritesFill: string;
export const SquareFill: string;
export const SquareFillLineVerticalSquare: string;
export const SquareFillLineVerticalSquareFill: string;
export const SquareFillOnCircleFill: string;
export const SquareFillOnSquareFill: string;
export const SquareGrid2x2: string;
export const SquareGrid2x2Fill: string;
export const SquareGrid3x2: string;
export const SquareGrid3x2Fill: string;
export const SquareGrid4x3Fill: string;
export const SquareLefthalfFill: string;
export const SquareLineVerticalSquare: string;
export const SquareLineVerticalSquareFill: string;
export const SquareList: string;
export const SquareListFill: string;
export const SquareOnCircle: string;
export const SquareOnSquare: string;
export const SquarePencil: string;
export const SquarePencilFill: string;
export const SquareRighthalfFill: string;
export const SquareSplit1x2: string;
export const SquareSplit1x2Fill: string;
export const SquareSplit2x1: string;
export const SquareSplit2x1Fill: string;
export const SquareSplit2x2: string;
export const SquareSplit2x2Fill: string;
export const SquareStack: string;
export const SquareStack3dDownDottedline: string;
export const SquareStack3dDownRight: string;
export const SquareStack3dDownRightFill: string;
export const SquareStack3dUp: string;
export const SquareStack3dUpFill: string;
export const SquareStack3dUpSlash: string;
export const SquareStack3dUpSlashFill: string;
export const SquareStackFill: string;
export const SquaresBelowRectangle: string;
export const Star: string;
export const StarCircle: string;
export const StarCircleFill: string;
export const StarFill: string;
export const StarLefthalfFill: string;
export const StarSlash: string;
export const StarSlashFill: string;
export const Staroflife: string;
export const StaroflifeFill: string;
export const Stop: string;
export const StopCircle: string;
export const StopCircleFill: string;
export const StopFill: string;
export const Stopwatch: string;
export const StopwatchFill: string;
export const Strikethrough: string;
export const SuitClub: string;
export const SuitClubFill: string;
export const SuitDiamond: string;
export const SuitDiamondFill: string;
export const SuitHeart: string;
export const SuitHeartFill: string;
export const SuitSpade: string;
export const SuitSpadeFill: string;
export const Sum: string;
export const SunDust: string;
export const SunDustFill: string;
export const SunHaze: string;
export const SunHazeFill: string;
export const SunMax: string;
export const SunMaxFill: string;
export const SunMin: string;
export const SunMinFill: string;
export const Sunrise: string;
export const SunriseFill: string;
export const Sunset: string;
export const SunsetFill: string;
export const TBubble: string;
export const TBubbleFill: string;
export const Table: string;
export const TableBadgeMore: string;
export const TableBadgeMoreFill: string;
export const TableFill: string;
export const Tag: string;
export const TagCircle: string;
export const TagCircleFill: string;
export const TagFill: string;
export const TextAligncenter: string;
export const TextAlignleft: string;
export const TextAlignright: string;
export const TextAppend: string;
export const TextBadgeCheckmark: string;
export const TextBadgeMinus: string;
export const TextBadgePlus: string;
export const TextBadgeStar: string;
export const TextBadgeXmark: string;
export const TextBubble: string;
export const TextBubbleFill: string;
export const TextCursor: string;
export const TextInsert: string;
export const TextJustify: string;
export const TextJustifyleft: string;
export const TextJustifyright: string;
export const TextQuote: string;
export const Textbox: string;
export const Textformat: string;
export const Textformat123: string;
export const TextformatAbc: string;
export const TextformatAbcDottedunderline: string;
export const TextformatAlt: string;
export const TextformatSize: string;
export const TextformatSubscript: string;
export const TextformatSuperscript: string;
export const Thermometer: string;
export const ThermometerSnowflake: string;
export const ThermometerSun: string;
export const Ticket: string;
export const TicketFill: string;
export const Tickets: string;
export const TicketsFill: string;
export const Timelapse: string;
export const Timer: string;
export const TimerFill: string;
export const Today: string;
export const TodayFill: string;
export const Tornado: string;
export const Tortoise: string;
export const TortoiseFill: string;
export const TrainStyleOne: string;
export const TrainStyleTwo: string;
export const TramFill: string;
export const Trash: string;
export const TrashCircle: string;
export const TrashCircleFill: string;
export const TrashFill: string;
export const TrashSlash: string;
export const TrashSlashFill: string;
export const Tray: string;
export const Tray2: string;
export const Tray2Fill: string;
export const TrayArrowDown: string;
export const TrayArrowDownFill: string;
export const TrayArrowUp: string;
export const TrayArrowUpFill: string;
export const TrayFill: string;
export const TrayFull: string;
export const TrayFullFill: string;
export const Tree: string;
export const Triangle: string;
export const TriangleFill: string;
export const TriangleLefthalfFill: string;
export const TriangleRighthalfFill: string;
export const Tropicalstorm: string;
export const Tuningfork: string;
export const Tv: string;
export const TvCircle: string;
export const TvCircleFill: string;
export const TvFill: string;
export const TvMusicNote: string;
export const TvMusicNoteFill: string;
export const Umbrella: string;
export const UmbrellaFill: string;
export const Underline: string;
export const UploadCircle: string;
export const UploadCircleFill: string;
export const Videocam: string;
export const VideocamCircle: string;
export const VideocamCircleFill: string;
export const VideocamFill: string;
export const Viewfinder: string;
export const ViewfinderCircle: string;
export const ViewfinderCircleFill: string;
export const WandRays: string;
export const WandRaysInverse: string;
export const WandStars: string;
export const WandStarsInverse: string;
export const Waveform: string;
export const WaveformCircle: string;
export const WaveformCircleFill: string;
export const WaveformPath: string;
export const WaveformPathBadgeMinus: string;
export const WaveformPathBadgePlus: string;
export const WaveformPathEcg: string;
export const Wifi: string;
export const WifiExclamationmark: string;
export const WifiSlash: string;
export const Wind: string;
export const WindSnow: string;
export const Wrench: string;
export const WrenchFill: string;
export const Xmark: string;
export const XmarkCircle: string;
export const XmarkCircleFill: string;
export const XmarkOctagon: string;
export const XmarkOctagonFill: string;
export const XmarkRectangle: string;
export const XmarkRectangleFill: string;
export const XmarkSeal: string;
export const XmarkSealFill: string;
export const XmarkShield: string;
export const XmarkShieldFill: string;
export const XmarkSquare: string;
export const XmarkSquareFill: string;
export const ZoomIn: string;
export const ZoomOut: string;
export const Zzz: string;
