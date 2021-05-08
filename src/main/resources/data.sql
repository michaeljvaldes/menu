INSERT INTO recipe(`id`,`name`, `lucy_rating`, `michael_rating`)
VALUES
    (1, 'Grilled pork chops with plums, halloumi, and lemon', 5, 5),
    (2, 'Pizza with shiitake mushrooms, roasted garlic, thyme, and taleggio', 3, 5);


INSERT INTO ingredient(`amount`, `name`, `recipe_id`)
VALUES
    ('3 tablespoons', 'extra virgin olive oil', 1),
    ('2 cups', 'sliced shiitake mushrooms', 1),
    ('4 to 6 cloves', 'garlic, peeled and smashed', 1),
    (null, 'sea salt', 1),
    (null, 'freshly ground pepper', 1),
    ('4 to 5 sprigs', 'fresh thyme', 1),
    ('1 ball', 'pizza dough', 1),
    ('3 oz', 'Taleggio cheese', 1);



INSERT INTO coffee(`id`, `roaster`, `name`, `country`)
VALUES
    (1, 'Greater Goods Coffee Co.', 'Fresh Perspective', 'Ethiopia'),
    (2, 'Greater Goods Coffee Co.', 'Kinini Village', 'Rwanda'),
    (3, 'Greater Goods Coffee Co.', 'Take Me Home', 'Costa Rica'),
    (4, '1000 Faces Coffee', 'Ngoma Bikunda Island', 'Rwanda');



INSERT INTO review(`id`, `date_time`, `rating`, `brew_method`, `temperature`, `notes`, `coffee_id`)
VALUES
    (1, '2020-12-23 14:02:04', 4, 1, 195, '', 1),
    (2, '2020-12-29 11:01:04', 5, 1, 194, '', 1),
    (3, '2021-05-08 09:02:22', 4, 1, 196, '', 1),
    (4, '2020-01-14 07:01:15', 2, 2, 201, '', 3),
    (5, '2020-02-01 10:28:19', 1, 3, 198, '', 3),
    (6, '2020-03-15 19:28:43', 3, 1, 195, '', 3),
    (7, '2020-03-16 15:59:00', 3, 1, 195, '', 4);
